import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SignUp = () => {
    const { providerLogin, googleSignIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('')
    const [createUserEmail, setCreateUserEmail] = useState('');

    // Google
    const googleProvider = new GoogleAuthProvider();

    // const [token] = useToken(createUserEmail);
    const navigate = useNavigate();

    // if (token) {
    //     navigate('/')
    // }
    const handleSignup = (data) => {
        console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully')

                // Update User
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(error => console.log(error))
            })
            .catch(err => {
                console.log(err)
                signupError(err.message)
            });

    }
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email);

            })
    }
    const getUserToken = email => {

    }
    // Google Sign IN
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='h-[800px] flex justify-center justify-items-center'>
            <div className='w-96 p-7' >
                <h2 className='text-xl text-center'>Signup Now</h2>
                <form onSubmit={handleSubmit(handleSignup)} >

                    {/* Just Form */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required", minLength: { value: 6, message: "Password must be 6 character longer", },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strength" }// Regx Password Strongth
                        })} className="input input-bordered w-full max-w-xs" />


                    </div>
                    <input type="submit" className="btn btn-accent w-full text-white mt-5" value="signup" />
                    {signupError && <p className='text-red-500'>{signupError}</p>}
                </form>
                <p className='mt-2 '>Already have an account <Link to={'/login'} className='text-secondary'>Please login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full '>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;