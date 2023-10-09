import Banner from "./Banner";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";
import Services from "./Services";
import Service from "./Service";
import WhyChoseUs from "./WhyChoseUs";
import Advertise from "./Advertise";

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto mb-5">
                <Marquee >
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <div className="text-center my-32">
                <h2 className="font-pacifico text-5xl">Its who we are. Its in our blood.</h2>
                <p className="mx-auto text-sm my-5 md:w-[800px]">See New Orleans through the eyes of a native New Orleanian. We are a creative team of locals offering authentic experiences revolving around what is fresh and unique in New Orleans. With decades of knowledge about New Orleans and 20+ years of experience in Destination Management, NOLA DMC prides itself on successfully creating memorable events that your attendees will treasure. We listen, and we deliver.</p>
                {/* <Link to="/services"><button className="hover:bg-teal-600 py-3 px-10 rounded-md text-white bg-[#005494]">Our Services</button></Link> */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 px-5">
                        {
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </div>
                </div>

            </div>
            <WhyChoseUs></WhyChoseUs>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;