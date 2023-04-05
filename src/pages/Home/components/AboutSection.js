import { NavLink } from "react-router-dom";
import about1 from "../../../assets/images/about1.png";
import about2 from "../../../assets/images/about2.png";
import about3 from "../../../assets/images/about3.png";
import arrow from "../../../assets/images/icons/arrow.svg";

const AboutSection = () => {
    return (
        <div className="container my-16 grid items-center gap-6 md:grid-cols-2">
            <div className="order-last grid grid-cols-2 grid-rows-4 items-center gap-4 md:order-first md:gap-6">
                <div className="order-last row-span-4 h-full md:order-first">
                    <img src={about1} className="h-full w-full rounded-2xl object-cover" alt="" />
                </div>
                <div className="row-span-4 py-12">
                    <div className="mb-4 h-full md:mb-6">
                        <img src={about2} className="h-full w-full rounded-2xl object-cover" alt="" />
                    </div>
                    <div className="h-full">
                        <img src={about3} className="h-full w-full rounded-2xl object-cover" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h1 className="title mb-6 text-center md:text-start">
                    About <span className="text-primary">Me</span>
                </h1>
                <p className="subtitle mb-6 text-justify md:text-left">
                    Hi, my name is John Doe, and I am a passionate diver and explorer of the underwater world. My love
                    for diving began at a young age when I first learned to snorkel on a family vacation. From that
                    moment on, I was hooked. <br />
                    <br /> On this website, I will be sharing my diving experiences, tips, and insights, as well as
                    providing resources for anyone who is interested in exploring the world beneath the surface. Join me
                    on this journey, and let's discover the beauty of the underwater world together.
                </p>
                <NavLink to="/about" className="button_primary mx-auto w-max bg-primary text-white md:mx-0">
                    <p>About Me</p>
                    <img src={arrow} width="20px" className="brightness-0 invert" alt="Arrow" />
                </NavLink>
            </div>
        </div>
    );
};

export default AboutSection;
