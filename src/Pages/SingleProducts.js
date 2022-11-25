import React from 'react'

const SingleProducts = ({ product, setProductName }) => {
    const {
        productname,
        price
    } = product;
    console.log(product);
    return (
        <div>
            <h2> Pnrjfjnnnf</h2>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className='flex justify-between	'>
                    {/* <div className='flex gap-3'>
                        {sellerImg ?
                            <img className='w-7 rounded-full' src={sellerImg} alt="" srcset="" />
                            :
                            <p>Not Found</p>
                        }
                        <h1>{sellerName}</h1>
                    </div> */}
                    {/* <div>
                        {published_date}
                    </div> */}
                </div>
                {/* <figure><img src={image} alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">Name: {productname}</h2>
                    <h1> resale_price: {price}</h1>
                    {/* <h1>original_price: {marketPrice}</h1>
                    <p>Location: {location}</p>
                    <p>Condition: {condition}</p>
                    <p>Post: {published_date}</p>
                    <p>Use: {use}</p> */}
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



        </div>
    )
}

export default SingleProducts