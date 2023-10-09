import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData();
    const {id} = useParams();
    const service = services.find(service=>service.id==id);
    return (
        // <div className="mt-30 max-w-7xl mx-auto z-[2]">
        //     <div className="z-[8] relative">
        //         <img className="w-full rounded-lg md:h-[650px]" src={service.image} alt="" />
        //         <div className="absolute bottom-0 w-full">
        //             <div className="bg-black bg-opacity-50 py-10 px-10 rounded-b-lg">
        //                 <button className="py-2 px-4  text-center rounded-lg text-white text-lg"> Donate {service.price}</button>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="mt-10">
        //         <h2 className="text-4xl font-bold">{service.title}</h2>
        //         <p className="my-7 mb-20 text-slate-700">{service.long_description}</p>
        //     </div>
        // </div>
        <div className="max-w-7xl mx-auto my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="text-justify">
                    <h2 className="text-2xl font-serif font-bold">{service.name}</h2><hr />
                    <p className="text-lg my-3">{service.long_description}</p>
                </div>
                <div>
                    <img src={service.image} alt="" />
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;