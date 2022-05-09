import { FC, useEffect, useReducer } from 'react';
import Cookie from 'js-cookie';// yarn add js-cookie   y   yarn add -D @types/js-cookie    || $ npm i js-cookie  y  npm add -D @types/js-cookie 
import React, { PropsWithChildren } from 'react';
import { ICartProduct } from './cartInterface';
import { CartContext, cartReducer } from '../cart';

export interface CartState {
    cart: ICartProduct[];
    numberOfItems: number;
    total: number;
}


const CART_INITIAL_STATE: CartState = {
    cart: [],
    numberOfItems: 0,
    total: 0,
}

type Props = {
    children?: React.ReactNode
  };


export const CartProvider: FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer( cartReducer , CART_INITIAL_STATE );

    // Efecto
    useEffect(() => {
        try 
        {
            const cookieProducts = Cookie.get('cart') ? JSON.parse( Cookie.get('cart')! ): [] // Cookie.get(cart) pregunto si existe para que no sea undefined, lo paarseo sino array vacio
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts });
        } catch (error) {
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] });
        }
    }, []);

    
    useEffect(() => { //esto hace que se mantengan los productos ene l carriot si actualizo la pagina
      Cookie.set('cart', JSON.stringify( state.cart ));
    }, [state.cart]);


    useEffect(() => {
        
        const numberOfItems = state.cart.reduce( ( prev, current ) => current.quantity + prev , 0 );
        const subTotal = state.cart.reduce( ( prev, current ) => (current.price * current.quantity) + prev, 0 )
    
        const orderSummary = {
            numberOfItems,
            total: subTotal 
        }

        dispatch({ type: '[Cart] - Update order summary', payload: orderSummary });
    }, [state.cart]);



    const addProductToCart = ( product: ICartProduct ) => {
        //! Nivel 1
         //dispatch({ type: '[Cart] - Add Product', payload: product });

        //! Nivel 2
       //  const productsInCart = state.cart.filter( p => p._id !== product._id);
        // dispatch({ type: '[Cart] - Add Product', payload: [...productsInCart, product] })

        //! Nivel Final
      const productInCart = state.cart.some( p => p._id === product._id );
        if ( !productInCart ) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product ] })

        // Acumular
        const updatedProducts = state.cart.map( p => {
            if ( p._id !== product._id ) return p;

            // Actualizar la cantidad
            p.quantity += product.quantity;
            return p;
        });

        dispatch({ type: '[Cart] - Update products in cart', payload: updatedProducts });

    }

    const updateCartQuantity = ( product: ICartProduct ) => {
        dispatch({ type: '[Cart] - Change cart quantity', payload: product });
    }

    const removeCartProduct = ( product: ICartProduct ) => {
        dispatch({ type: '[Cart] - Remove product in cart', payload: product });
    }


    return (
        <CartContext.Provider value={{
            ...state,

            // Methods
            addProductToCart,
            removeCartProduct,
            updateCartQuantity,
        }}>
            { children }
        </CartContext.Provider>
    )
};