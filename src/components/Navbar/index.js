import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
    return (
        <nav className="sticky top-0">
            <div className="absolute top-0 w-full bg-white py-2 shadow-navbar">
                <div className="container flex items-center justify-between">
                    <NavLink to="/">
                        <img src={logo} width="70px" alt="Logo" />
                    </NavLink>
                    <ul className="flex gap-6">
                        <li>
                            <NavLink exact to="/" className="font-medium tracking-wide" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="font-medium tracking-wide" activeClassName="active">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/posts" className="font-medium tracking-wide" activeClassName="active">
                                Posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="font-medium tracking-wide" activeClassName="active">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
