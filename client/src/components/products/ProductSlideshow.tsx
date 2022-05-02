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

    return(
        <Slide
            easing="ease"
            duration={duration}
            autoplay= {autoPlay}
            indicators
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