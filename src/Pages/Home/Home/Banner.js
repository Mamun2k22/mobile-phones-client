import React from 'react'
import img1 from '../../../assest/Banner1.png'
import img2 from '../../../assest/Banner2.png'
import img3 from '../../../assest/Banner3.png'
import BannerItem from '../BannerItem'

const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    },
]



const Banner = () => {


    return (
        <div className="carousel w-11/12 py-10 mx-auto">
            {
                bannerData.map(banner =>
                    <BannerItem
                        key={banner.id}
                        banner={banner}
                    ></BannerItem>)
            }
        </div>
    )
}

export default Banner