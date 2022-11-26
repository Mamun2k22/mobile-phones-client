import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthProvider';
import { setAuthToken } from '../hooks/useToken';
// import { setAuthToken } from '../hooks/useToken';


const SignUp = () => {
    const { googleSignIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('')
    const googleProvider = new GoogleAuthProvider();



    const navigate = useNavigate();

    const handleSignUp = (data) => {
        const photoURL = data.photoURL[0];
        const formData = new FormData();
        formData.append('photoURL', photoURL);
        const url = 'https://api.imgbb.com/1/upload?key=85ac0d2a5403dea4afae0f1bd9591173'
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                setSignupError('');
                createUser(data.email, data.password, data.designation,)
                    .then(result => {
                        const user = result.user;
                        toast.success('User Created Successfully.')
                        navigate('/')
                        const userInfo = {
                            displayName: data.displayName,
                        }
                        updateUser(userInfo)
                            .then(() => {
                                saveUser(data.displayName, data.email, data.designation, imageData.data.photoURL.url)
                            })
                            .catch((error) => {
                                toast.error(error.massage)
                            });
                        // handelEmailVeryfi()
                    })
                    .catch(error => {
                        console.log(error)
                        setSignupError(error.message)
                    });
            })

            .catch(error => {
                console.log(error)

            });
    };

    const saveUser = (displayName, email, designation, photoURL) => {
        const user = { displayName, email, designation, photoURL };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setAuthToken(email)
                navigate('/');
            })
    };

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
                <form onSubmit={handleSubmit(handleSignUp)} >

                    {/* Just Form */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("displayName")} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("photoURL", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>


                    <div>
                        <label className="label"> <span className="label-text">Please selected a role</span></label>
                        <select
                            type="text" {...register("designation", {
                                required: "Its requires",
                            })}
                            className="select select-bordered w-full max-w-xs">
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>
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