import React from 'react'
import Banner3 from '../../../assest/Banner3.png'
import bg2 from '../../../assest/bg2.jpg'
import bannerbg from '../../../assest/bannerbg.jpg'
import BannerItem from '../BannerItem'

const bannerData = [
    {
        image: Banner3,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: bg2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: bannerbg,
        prev: 2,
        id: 3,
        next: 1
    },
]



const Banner = () => {


    return (
        <div className="carousel w-11/12 py-24 mx-auto">
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