import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { AttachMoneyOutlined, CreditCardOffOutlined, CreditCardOutlined, DashboardOutlined, GroupOutlined, CategoryOutlined, CancelPresentationOutlined, ProductionQuantityLimitsOutlined, AccessTimeOutlined, AddShoppingCart } from '@mui/icons-material';

import { AdminLayout } from './AdminLayout'
import { Grid, Typography } from '@mui/material'
import { SummaryTile } from './SummaryTitle'
//import { DashboardSummaryResponse } from './interfaceDashborad';
import { useDispatch, useSelector } from 'react-redux';
import {GETUSERS, GETORDERS} from '../../actions'
import { AppDispatch,RootState } from '../../store/index'
import { GETPRODUCTS } from '../../actions/index';


const useAppDispatch = () => useDispatch<AppDispatch>();


const DashboardPage = () => {


    const products=useSelector((State:RootState) => State.rootReducer.productos);
    const users=useSelector((State:RootState) => State.rootReducer.usuarios);
    const orders=useSelector((State:RootState) => State.rootReducer.ordenes);


    const dispatch=useAppDispatch()

    const [refreshIn, setRefreshIn] = useState(25);

    useEffect(()=>{
      dispatch(GETUSERS())
      dispatch(GETORDERS())
      dispatch(GETPRODUCTS())
    },[dispatch,refreshIn===0])

    /*const { data, error } = useSWR<DashboardSummaryResponse>('/api/dashboard', {
        refreshInterval: 30 * 1000 // 30 segundos
    });*/


    useEffect(() => {
      const interval = setInterval(()=>{ //set interval es una funcion de js
        setRefreshIn( refreshIn => refreshIn > 0 ? refreshIn - 1: 25 );
      }, 1000 );
    
      return () => clearInterval(interval)
    }, []);
    


    let hightInventory = products.filter((p:any)=> p.stock>10)
    let productsWithNoInventory = products.filter((p:any)=> p.stock===0)
    
/*
    if ( !error && !data ) {
        return <></>
    }

    if ( error ){
        console.log(error);
        return <Typography>Error al cargar la información</Typography>
    }
*/
/*
    const {
        numberOfOrders,
        paidOrders,
        numberOfClients,
        numberOfProducts,
        productsWithNoInventory,
        lowInventory,
        notPaidOrders,
    } = data!;
*/

  return (
    <AdminLayout
        title='Dashboard'
        subTitle='Estadisticas generales'
        icon={ <DashboardOutlined /> }
    >
        
        <Grid container spacing={2}>
            
            <SummaryTile 
                title={ orders.length }
                subTitle="Ordenes totales"
                icon={ <CreditCardOutlined color="secondary" sx={{ fontSize: 40 }} /> }
            />

            <SummaryTile 
               // title={ paidOrders }
                title={ 2 }
                subTitle="Ordenes entregadas"
                icon={ <AttachMoneyOutlined color="success" sx={{ fontSize: 40 }} /> }
            />

            <SummaryTile 
               // title={ notPaidOrders }
               title={ 2 }
                subTitle="Ordenes sin entregar"
                icon={ <CreditCardOffOutlined color="error" sx={{ fontSize: 40 }} /> }
            />

        
            <SummaryTile 
               title={ users.length }
                subTitle="Clientes"
                icon={ <GroupOutlined color="primary" sx={{ fontSize: 40 }} /> }
            />

            <SummaryTile 
                title={products.length }
                subTitle="Productos"
                icon={ <CategoryOutlined color="warning" sx={{ fontSize: 40 }} /> }
            />

            <SummaryTile 
              
               title={ productsWithNoInventory.length }
                subTitle="Sin inventario"
                icon={ <CancelPresentationOutlined color="error" sx={{ fontSize: 40 }} /> }
            />

            <SummaryTile 
              
               title={ hightInventory.length }
                subTitle="Alto inventario"
                icon={ <AddShoppingCart color="success" sx={{ fontSize: 40 }} /> }
            />

            <SummaryTile 
               
               title={ refreshIn }
                subTitle="Actualización en:"
                icon={ <AccessTimeOutlined color="secondary" sx={{ fontSize: 40 }} /> }
            />

        </Grid>


    </AdminLayout>
  )
}

export default DashboardPage