import React from 'react';
import bg from '../../../assest/bg.jpg'

const Contact = () => {
    return (
        <div className='w-11/12 mx-auto rounded-md'>
            <section style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'
            }} className="my-20 rounded-md">
                <div className='grid justify-items-center'>
                    <div className='mb-2 mt-8 '>
                        <h2 className='text-xl font-bold text-primary'>Contact Us</h2>
                    </div>
                    <p className='text-4xl mb-10 text-black' >Stay connected with us</p>

                    <div className="form-control w-full max-w-xs">
                        <input type="text" placeholder="Email Addressed" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mt-5" />
                        <div className="form-control mt-5">
                            <textarea className="textarea textarea-bordered h-24" placeholder="Enter your message "></textarea>
                        </div>

                    </div>

                    <div className='mb-10 mt-10'>
                        <input type="submit" value="Submit" className="btn btn-primary bg-gradient-to-r from-primary to secondary text-white w-60" />

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;