import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister =(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // const name = form.get('name');
        // const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        createUser(email,password)
        .then()
        .catch();
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
                    <p className="mt-4 text-center">Already have an account? <Link className="text-blue-600" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;