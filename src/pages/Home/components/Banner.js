import arrow from "../../../assets/images/icons/arrow.svg";
import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex h-screen w-full items-center bg-banner bg-cover bg-no-repeat text-white">
            <div className="container">
                <div className="flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-start">
                    <h1 className="mb-4 font-playfair text-4xl font-bold leading-[50px] tracking-wide lg:text-5xl lg:leading-[64px]">
                        Discover the Wonders of the Sea
                    </h1>
                    <p className="mb-8 text-lg font-medium leading-8 md:w-2/3 lg:w-full lg:text-xl lg:leading-9">
                        Explore the Depths Through the Eyes of <span className="underline">John Doe</span>, a Seasoned
                        Scuba Diving Enthusiast
                    </p>
                    <NavLink
                        to="/post"
                        className="button_primary group bg-white text-primary transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white">
                        <p>Explore Now</p>
                        <img
                            className="ml-2 transform transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:brightness-0 group-hover:invert"
                            src={arrow}
                            width="20px"
                            alt="Arrow"
                        />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;
