import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <section className='flex items-center text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto'>
                    <img className='w-1/3 -mb-12' src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1669640521~exp=1669641121~hmac=ae68595eb14b8a7c8dfdc322af1b9861608deb19da8aa18664bf07cee06019f1" alt="" />
                    <div className='text-center'>
                        <p className='text-2xl font-semibold md:text-3xl mb-6'>
                            Sorry, we couldn't find this page.
                        </p>
                        <Link
                            to='/'
                            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;