const QandA = () => {
    return (
        <div className="max-w-7xl mx-auto my-5">
            <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Click for the FAQs
                </div>
                <div className="collapse-content">
                    <p className="font-semibold">1. What is the purpose of this educational and training event?</p>
                    <p><small>This question sets the tone for understanding the event's objectives and goals.</small></p>
                    <p className="font-semibold">2. Who should attend this event?</p>
                    <p><small>Anyone who can juggle flaming bowling balls while riding a unicycle.</small></p>
                    <p className="font-semibold">3. When and where is the event taking place?</p>
                    <p><small>On Mars, next Tuesday, at the secret intergalactic training center.</small></p>
                    <p className="font-semibold">4. How do I register for the event?</p>
                    <p><small>To register, simply send a message to the event's pet parrot, Jhinku, who will respond with a registration link.</small></p>
                    <p className="font-semibold">5. Is there a cost to attend, and what does it cover?</p>
                    <p><small>Attendance is free, and it includes a lifetime supply of invisible cookies.</small></p>
                </div>
            </div>

            <div>
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Question</span>
                        </label>
                        <textarea className="textarea textarea-bordered" placeholder="question"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Send Question</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QandA;

