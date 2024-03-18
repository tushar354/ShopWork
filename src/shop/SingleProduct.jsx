import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../Components/PageHeader'

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { Autoplay } from "swiper/modules"

const SingleProduct = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()


    useEffect(() => {
        fetch("/src/products.json").then(res => res.json()).then(data => setProduct(data))
    }, [])

    const result = product.filter((p) => p.id === id)
    return (
        <div>
            <PageHeader title={"Our shop Single"} curPage={"Shop/Single Product"} />
            <div className='shop-single padding-tb aside-bg'>
                <div className='conatiner'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='product-details'>
                                    <div className='row align-items-center'>
                                        <div className='col-md-6 col-12'>
                                            <div className='product-thumb'>
                                                <div className='swiper-container pro-single-top'>
                                                    <Swiper
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        loop={"true"}
                                                        autoplay={{
                                                            delay: 2000,
                                                            disableOnInteraction: false
                                                        }}
                                                        modules={[Autoplay]}
                                                        navigation={{
                                                            prevEl: ".pro-single-prev",
                                                            nextEl: ".pro-single-next"
                                                        }}
                                                        className='mySwiper'>
                                                        {
                                                            result.map((item, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <div className='single-thumb'>
                                                                        <img src={item.img}></img>
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </Swiper>
                                                    <div className='pro-single-next'>
                                                        <i className='icofont-rounded-left'> </i>
                                                    </div>
                                                    <div className='pro-single-prev'>
                                                        <i className='icofont-rounded-right'> </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-md-6 col-12'>
                                            <div className='post-content'>
                                                <div>
                                                    {
                                                        result.map(item => <p key={item.id}>{item.name}</p>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='review'>

                                </div>
                            </article>
                        </div>

                        <div className='col-lg-4 col-12'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct