// import { useState } from "react";

// const RequestForProposal = () => {
//     const [email, setEmail] = useState('Hala@gmail.com');
//     const [password, setPassword] = useState('');
//     const handleFormSubmit = e => {
//         e.preventDefault();
//         console.log(email);
//         console.log(password);
//     }
//     const handleEmailChange = e => {
//         setEmail(e.target.value);
//     }
//     const handlePasswordChange = e => {
//         setPassword(e.target.value);
//     }
//     return (
//         <div className="mx-auto max-w-7xl">
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
//                 <div className="col-span-2">
//                     <form onSubmit={handleFormSubmit}>
//                         <input className="input input-bordered w-full max-w-xs" type="text" name='name' /><br />
//                         <input className="input input-bordered w-full max-w-xs" value={email} onChange={handleEmailChange} type="email" name="email" />
//                         <br />
//                         <input className="input input-bordered w-full max-w-xs" onChange={handlePasswordChange} type="password" name="password" /><br />
//                         <input type="submit" value="Submit" />
//                     </form>
//                 </div>
//                 <div>
//                     <div className="card bg-base-100 shadow-xl">
//                         <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
//                         <div className="card-body">
//                             <h2 className="card-title">Shoes!</h2>
//                             <p>If a dog chews shoes whose shoes does he choose?</p>
//                             <div className="card-actions justify-end">
//                                 <button className="btn btn-primary">Buy Now</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RequestForProposal;


const RequestForProposal = () => {
    return (
        <div className="mx-auto max-w-7xl my-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <div className="col-span-2">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" placeholder="Phone" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Proposal</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Proposal"></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Event Date</span>
                            </label>
                            <input type="date" placeholder="password" name="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send Proposal</button>
                        </div>
                    </form>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default RequestForProposal;