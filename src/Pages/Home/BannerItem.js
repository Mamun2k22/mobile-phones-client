import React from 'react'
import './Banner.css'


const BannerItem = ({ banner }) => {
    const { image, id, prev, next } = banner;

    return (




        <div id={`slide${id}`} className="carousel-item relative w-full lg:h-[500px]">
            <div className='img-gredent'>
                <img src={image} className="w-full  rounded-xl" alt='' />
            </div>

            <div className="absolute flex justify-end  transform -translate-y-1/2 lg:left-24 md:left-12   top-2/4">
                <h1 className='lg:text-6xl   font-bold text-white '>
                    We Provide Best<br />
                    Used Mobile Phones
                    <br />
                    <p className='text-white text-xl mt-5'>
                        we have Guaranteed in Services on Buyer !
                    </p>

                </h1>

            </div>
            <div className="absolute flex justify-end transform left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 mb-40">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>


            </div>
        </div>

    )
}

export default BannerItem








