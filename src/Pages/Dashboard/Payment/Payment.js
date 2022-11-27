import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckouForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';






const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const data = useLoaderData();
    const { peoductName, price } = data;

    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }

    return (
        <div>
            <p className='text-3xl font-bold'>Payment for {peoductName}</p>
            <p className='text-xl '> Please pay <span className='font-bold'> ${price} </span></p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        data={data}
                    />
                </Elements>
            </div>
        </div>
    )
}

export default Payment