import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const { id, name, image, short_description, price } = service;
    const navigate = useNavigate();
    const handleClick=(e)=>{
        console.log(e);
        navigate(`/${id}`)
    }
    return (
        <div className="flex flex-wrap">
            <div className="card bg-base-100 shadow-xl">
                <figure className="h-[201px]"><img className="cover" src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{name}</h2>
                    <p>{short_description}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleClick} className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;