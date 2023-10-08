import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-10">
                <h2 className="font-pacifico text-5xl">Services</h2>
                <p className="mx-auto w-20 my-5 md:w-[800px]">We do business based on relationships. Our promise to our clients is to listen, understand their definition of success, and creatively execute their vision to ensue a memorable New Orleans experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;