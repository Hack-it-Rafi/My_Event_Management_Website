const RequestForProposal = () => {
    return (
        <div className="mx-auto max-w-7xl my-10 px-5">
            <div className="lg:grid  lg:grid-cols-3 gap-10">
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
                <div className=" w- w-full flex items-center justify-center">
                    <img className="w-full" src="https://statc.lumoslearning.com/llwp/wp-content/uploads/2021/05/infographic-2.png?x89388" alt="" />
                </div>
            </div>
        </div>
    );
};

export default RequestForProposal;