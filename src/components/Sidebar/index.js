import logo from "../../assets/images/logo.svg";
import profile from "../../assets/images/icons/profile.svg";
import stories from "../../assets/images/icons/tasks-active.svg";
import adminContact from "../../assets/images/icons/adminContact.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const email = localStorage.getItem("email");
    const username = localStorage.getItem("username");

    return (
        <>
            <div className="relative h-screen w-1/5 bg-white px-4 py-6 shadow-sidebar">
                <img src={logo} width="100px" className="mx-auto" alt="Logo" />
                <div className="my-10 flex gap-4 py-2">
                    <div>
                        <img src={profile} className="rounded-full" alt="Logo" />
                    </div>
                    <div>
                        <p className="font-bold">{username}</p>
                        <p className="text-gray">{email}</p>
                    </div>
                </div>
                <ul className="flex flex-col gap-4">
                    <li>
                        <NavLink exact to="/admin/posts" className="font-medium tracking-wide" activeClassName="active">
                            <div className="flex items-center gap-4">
                                <img src={stories} className="img-sidebar" alt="" />
                                <p>Stories</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/contact" className="font-medium tracking-wide" activeClassName="active">
                            <div className="flex items-center gap-4">
                                <img src={adminContact} className="img-sidebar" alt="" />
                                <p>Contact</p>
                            </div>
                        </NavLink>
                    </li>
                </ul>
                <button className="absolute bottom-0 left-0 w-full bg-red-600 py-4 font-bold text-white">
                    Sign Out
                </button>
            </div>
        </>
    );
};

export default Sidebar;
