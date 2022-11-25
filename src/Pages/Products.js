import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import SingleProducts from './SingleProducts'


const Products = () => {
    const productsItems = useLoaderData();
    console.log(productsItems);

    const [productName, setProductName] = useState(null)
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:ml-12 sm:ml-24 mt-20'>
                {
                    productsItems.map(product =>
                        <SingleProducts
                            key={product._id}
                            product={product}
                            setProductName={setProductName}
                        ></SingleProducts>)
                }
            </div>

            {
                productName &&
                <BookingModal
                    setProductName={setProductName}
                    productName={productName}
                ></BookingModal>

            }
        </div>
    )
}

export default Products