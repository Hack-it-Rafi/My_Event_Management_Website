import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2'

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo);
        setRegisterError('');
        setSuccess('');

        const specialCharRegex = /[!@#$%^&*()_+{}\]:;<>,.?~\\/-]/;
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters.')
            return;
        }
        else if (!specialCharRegex.test(password)) {
            setRegisterError('Your password should have at least one special characters.')
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Registration Successful!',
                    text: 'Enjoy Exploring!',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                  });
                setSuccess('User Created Successfully.');
            })
            .catch();
        
        updateUser(name, photo)
        .then()
        .catch(error=>{
            setRegisterError(error);
        });
    }

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(()=>{
            Swal.fire({
                title: 'Login Successful!',
                text: 'Enjoy Exploring!',
                icon: 'success',
                confirmButtonText: 'Continue'
              })
            navigate("/");
        })
        .catch(error=>{
            setRegisterError(error);
        });
    }
    return (
        <div className="mb-10">
            <div className="text-center my-6">
                <h1 className="text-3xl font-bold">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-700">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600">{success}</p>
                    }
                    
                    <div className="mx-auto text-center">
                        <p className="pb-2">or,</p>
                        <button onClick={handleGoogleSignIn} className="flex gap-2 items-center py-3 px-6 bg-sky-400  rounded-lg"><FcGoogle/>
                        <span className="text-white font-bold">Google</span></button>
                    </div>
                    <p className="mt-4 text-center">Already have an account? <Link className="text-blue-600" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;