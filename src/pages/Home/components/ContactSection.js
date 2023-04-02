import { NavLink } from "react-router-dom";

const ContactSection = () => {
    return (
        <div className="container">
            <div className="my-16 flex flex-col  items-center rounded-[20px] bg-contactBox py-12 text-white">
                <h1 className="title mb-4">Let's Dive Together</h1>
                <p className="subtitle mb-6 w-1/2 text-center">
                    Connect with Me to Explore the Hidden Treasures of the Ocean and Create Lasting Memories
                </p>
                <NavLink to="/contact" className="button_primary bg-white text-primary shadow-contactButton">
                    Contact Me
                </NavLink>
            </div>
        </div>
    );
};

export default ContactSection;
