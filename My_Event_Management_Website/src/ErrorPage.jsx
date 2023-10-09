import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="text-center">
                <h1>OOPS!!!!!</h1>
                <Link to="/"><button className="btn">Go back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;