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
            <div className="max-w-7xl mx-auto text-lg text-rose-700 my-5">
                <Marquee >
                    <p>We provide the best of services. You are always welcomed.</p>
                    
                </Marquee>
            </div>
            <div className="text-center my-32">
                <h2 className="font-pacifico text-5xl">Its who we are. Its in our blood.</h2>
                <p className="mx-auto text-[#12121299]  my-5 md:w-[800px]">Educational and Training Events Management services encompass comprehensive event planning, venue selection, content development, and expert speaker coordination. These services also cover attendee registration, marketing and promotion, and the integration of technology solutions. Whether it's a corporate training seminar or an academic conference, Educational and Training Events Management professionals ensure that all logistical, content, and promotional aspects of the event are expertly handled to meet the client's objectives and deliver a successful learning experience.</p>
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