import Footer from "./Footer";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div className="text-center my-32">
                <h2 className="font-pacifico text-5xl">Its who we are. Its in our blood.</h2>
                <p className="mx-auto text-sm w-20 my-5 md:w-[800px]">See New Orleans through the eyes of a native New Orleanian. We are a creative team of locals offering authentic experiences revolving around what is fresh and unique in New Orleans. With decades of knowledge about New Orleans and 20+ years of experience in Destination Management, NOLA DMC prides itself on successfully creating memorable events that your attendees will treasure. We listen, and we deliver.</p>
                <Link to="/services"><button className="hover:bg-teal-600 py-3 px-10 rounded-md text-white bg-[#005494]">Our Services</button></Link>
            </div>
        </div>
    );
};

export default Home;