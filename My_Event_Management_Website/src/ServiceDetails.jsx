import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData();
    const {id} = useParams();
    const service = services.find(service=>service.id==id);
    return (
        <div className="mt-10 max-w-7xl mx-auto">
            <div className="z-10 relative">
                <img className="w-full rounded-lg md:h-[650px]" src={service.image} alt="" />
                <div className="absolute bottom-0 w-full">
                    <div className="bg-black bg-opacity-50 py-10 px-10 rounded-b-lg">
                        <button className="py-2 px-4  text-center rounded-lg text-white text-lg"> Donate {service.price}</button>
                    </div>
                </div>
            </div>
            {/* <ToastContainer /> */}
            <div className="mt-10">
                <h2 className="text-4xl font-bold">{service.title}</h2>
                <p className="my-7 mb-20 text-slate-700">{service.long_description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;