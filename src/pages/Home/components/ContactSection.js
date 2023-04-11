import { NavLink } from "react-router-dom";

const ContactSection = () => {
    return (
        <div className="container">
            <div className="my-16 flex flex-col  items-center rounded-[20px] bg-contactBox px-4 py-12 text-white">
                <h1 className="title mb-4 text-center">Let's Dive Together</h1>
                <p className="subtitle mb-6 text-center md:w-2/3 lg:w-1/2">
                    Connect with Me to Explore the Hidden Treasures of the Ocean and Create Lasting Memories
                </p>
                <NavLink
                    to="/contact"
                    className="button_primary group bg-white text-primary shadow-contactButton transition-all duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white">
                    Contact Me
                </NavLink>
            </div>
        </div>
    );
};

export default ContactSection;
