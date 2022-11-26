import React from 'react'
import { FaStar } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import { CiCircleRemove } from 'react-icons/ci';

const SingleProducts = ({ product, setProductName }) => {
    const {

        phoneName,
        location,
        resalePrice,
        marketPrice,
        use,
        condition,
        published_date,
        sellerName,
        sellerImg,
        image,
        details,
        number,
        rating,
        verified


    } = product;
    console.log(product);
    return (
        <div>
            <div className="card card-compact w-96  bg-base-100 shadow-xl p-5">
                <div className='flex justify-between mb-2'>
                    <div className='flex gap-3'>
                        {/* <img className='w-7 rounded-full' src={sellerImg} alt="" srcset="" /> */}

                        {sellerImg ?
                            <img className='w-7 rounded-full' src={sellerImg} alt="" srcset="" />
                            :
                            <p>Not Found</p>
                        }
                        <h1>{sellerName}</h1>
                    </div>
                    <div>
                        <span>
                            {
                                verified ? <span className='flex gap-2 items-center'>Verified: <GoVerified className='text-blue-500'></GoVerified></span>
                                    :
                                    <span className='flex gap-2 items-center' >Unverified: <CiCircleRemove className='text-red-500 font-bold'></CiCircleRemove></span>
                            }
                        </span>
                    </div>
                </div>
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {phoneName}</h2>
                    <h1 className='text-lg'> Resale-price: {resalePrice} tk</h1>
                    <h1 className='text-lg'>Market-price: {marketPrice} tk</h1>
                    <p className='text-lg'>Location: {location}</p>
                    <p className='text-lg'>Condition: {condition}</p>
                    <p className='text-lg'>Post: {published_date}</p>
                    <p className='text-lg'>Use: {use}</p>
                    <p className='text-lg'>Details: {details}</p>
                    <p className='text-lg'>Number: {number}</p>
                    <p className='flex gap-2 text-lg items-center'><FaStar className='text-yellow-500 ' /> {rating}</p>
                    <div className="card-actions justify-end">
                        <label
                            onClick={() => setProductName(product)}
                            htmlFor="booking-modal"
                            className="btn bg-indigo-500 text-white"
                        >Buy Now
                        </label>
                    </div>
                </div>
            </div>



        </div >
    )
}

export default SingleProducts