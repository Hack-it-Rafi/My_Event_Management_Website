import logo from "/Heading.png"
const Header = () => {
    return (
        <div className="text-center max-w-7xl mx-auto">
            <img className="mx-auto w-56" src={logo} alt="" />
            <p className="text-lg text-[#706F6F]">Educational and Training Events Management</p>
            {/* <p>{moment().format("dddd, MMMM D, YYYY")}</p> */}
        </div>
    );
};

export default Header;