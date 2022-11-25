import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (

        <section className='my-10'>
            <div className='ml-20'>
                <div className="carousel-item relative w-full">
                    <div className='carousel-img'>
                        <img src="https://img.freepik.com/free-photo/super-excited-woman-holding-up-smartphone-shopping-bags_23-2148684511.jpg?w=900&t=st=1669368549~exp=1669369149~hmac=23c336511e4cdae1e2e39478c95501c6a5be6539adea645a455948a3fc99fcc5" alt="" className="w-full rounded-xl" />
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                        <h1 className='text-6xl font-bold text-white'>
                            We Provide Buy-sell<br />
                            Used Mobile Phones
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-1/2">
                        <p className='text-white text-xl'>
                            we have Guaranteed in Services on Buyer!
                        </p>
                    </div>

                    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4">
                        <button className="btn btn-warning mr-5"> <Link to={'/home'}>More Info</Link></button>


                    </div>



                    {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-40">
                    <a href={`#slide `} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide`} className="btn btn-circle">❯</a>
                </div> */}
                    <div className="carousel-item relative w-full">
                        <div className='carousel-img'>
                            <img src="https://img.freepik.com/premium-vector/shopping-online-mobile-application-concept-marketing-digital_71775-1105.jpg?w=900" alt="" className="w-full rectangle-xl rounded-lg" />
                        </div>

                        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                            <h1 className='text-6xl font-bold text-white'>
                                We Provide Buy-sell<br />
                                Used Mobile Phones
                            </h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-18 w-2/5 top-1/2">
                            <p className='text-white text-xl'>
                                we have Guaranteed in Services on Buyer !
                            </p>
                        </div>

                        <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4">
                            <button className="btn btn-warning mr-5"> <Link to={'/home'}>Read More</Link></button>


                        </div>



                        {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-40">
                        <a href={`#slide `} className="btn btn-circle mr-5">❮</a>
                        <a href={`#slide`} className="btn btn-circle">❯</a>
                    </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;