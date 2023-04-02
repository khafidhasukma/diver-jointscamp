import arrow from "../../../assets/images/icons/arrow.svg";
import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex h-screen w-full items-center bg-banner text-white">
            <div className="container">
                <div className="w-1/2">
                    <h1 className="mb-4 font-playfair text-5xl font-bold leading-[64px] tracking-wide">
                        Discover the Wonders of the Sea
                    </h1>
                    <p className="mb-4 text-xl font-medium leading-9">
                        Explore the Depths Through the Eyes of <span className="underline">John Doe</span>, <br /> a
                        Seasoned Scuba Diving Enthusiast
                    </p>
                    <NavLink to="/post" className="button_primary w-max bg-white text-primary">
                        <p>Explore Now</p>
                        <img src={arrow} width="20px" alt="Arrow" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;
