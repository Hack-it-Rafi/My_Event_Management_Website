const Service = ({ service }) => {
    const { id, name, image, short_description } = service;
    return (
        <div className="flex flex-wrap">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="h-[201px]"><img className="cover" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;