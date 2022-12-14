import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('Login Success')
                navigate('/')
                console.log(user);




            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            });
    }

    // Google Sign In
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('Error', error);
            })
    }

    return (
        <div className='h-[800px] flex justify-center justify-items-center'>
            <div className='w-96 p-7' >
                <h2 className='text-xl text-center'>Login Now</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    {/* Just Form */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 character longer" } })} className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget Password</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input type="submit" className="btn btn-accent w-full text-white" value="login" />
                    <div>
                        {loginError && <p className='text-red-600'> {loginError}</p>}

                    </div>
                </form>
                <p className='mt-2 '>Fot a New Seller ? <Link to={'/signup'} className='text-secondary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full '>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;