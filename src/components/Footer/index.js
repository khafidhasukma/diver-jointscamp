import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
    return (
        <footer className="bg-primary py-4 text-sm text-white">
            <div className="container flex flex-col items-center">
                <img src={logo} width="80px" alt="Logo" />
                <ul className="my-4 flex gap-4">
                    <li>
                        <Link exact to="/" className="font-medium">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="font-medium">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/posts" className="font-medium">
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="font-medium">
                            Contact
                        </Link>
                    </li>
                </ul>
                <hr className="mb-4 h-[2px] w-full bg-white opacity-20" />
                <p className="font-light tracking-wider">
                    &copy; {new Date().getFullYear()} JointsCamp. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
