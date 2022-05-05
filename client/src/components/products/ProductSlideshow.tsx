import {FC} from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './ProductSlideshow.module.css';




interface Props{
    images: string[]
    duration: number
    autoPlay: boolean
}

export const ProductSlideshow: FC<Props>=({images, duration ,autoPlay})=>{

    let flechas=true
    let swipe=true
    let indicadores=true

    if(images.length>1 && autoPlay===true){autoPlay=true}else{autoPlay=false}

    if(images.length===1){flechas=false;  swipe=false; indicadores=false}

    return(
        <Slide
            easing="ease"
            duration={duration}
            autoplay= {autoPlay}
            indicators= {indicadores}
            arrows={flechas}
            canSwipe={swipe}
        >
            {
                images.map( image=>{
                    const url=`${image}`;
                    return(
                        <div className={styles['each-slide']} key={image}>
                            
                            <div style={{
                                backgroundImage:`url(${url})`,
                                backgroundSize: 'contain',
                                backgroundRepeat:'no-repeat',
                                backgroundPositionX: 'center'
                            }}>
                            </div>

                        </div>
                    )
                })
            }
        </Slide>
    )
}