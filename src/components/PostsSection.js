import { NavLink } from "react-router-dom";
import arrow from "../assets/images/icons/arrow.svg";
import about1 from "../assets/images/about1.png";

const PostsSection = () => {
    return (
        <div className="bg-primary py-16 text-white">
            <div className="container">
                <div className="mb-8 grid grid-cols-2 justify-between gap-6">
                    <div>
                        <h1 className="title mb-3">Stories and Adventures</h1>
                        <p className="subtitle">
                            Inspiring Stories and Adventures from Scuba Diving Enthusiasts Around the World
                        </p>
                    </div>
                    <div className="justify-self-end">
                        <NavLink to="/posts" className="button_primary w-max bg-white text-primary">
                            <p>See More</p>
                            <img src={arrow} width="20px" alt="Arrow" />
                        </NavLink>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <NavLink to="/posts/1" className="rounded-2xl bg-white p-3 shadow-box">
                        <img src={about1} className="h-40 w-full rounded-2xl object-cover shadow-box" alt="" />
                        <p className="mb-3 mt-2 text-end text-xs font-semibold text-gray">27 Dec, 2022</p>
                        <h1 className="text-xl font-extrabold text-darkGray">Dive With Dolphins</h1>
                        <p className="text-sm text-gray1">
                            Emily had always been fascinated by dolphins. When she heard about a place where she could
                            dive with them, she knew she had to go lorem ipsum dolor sit...
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button className="flex items-center gap-2 text-primary">
                                <p className="text-sm font-bold">Read More</p>
                                <img src={arrow} width="20px" alt="Arrow" />
                            </button>
                        </div>
                    </NavLink>
                    <NavLink to="/posts/1" className="rounded-2xl bg-white p-3 shadow-box">
                        <img src={about1} className="h-40 w-full rounded-2xl object-cover shadow-box" alt="" />
                        <p className="mb-3 mt-2 text-end text-xs font-semibold text-gray">27 Dec, 2022</p>
                        <h1 className="text-xl font-extrabold text-darkGray">Dive With Dolphins</h1>
                        <p className="text-sm text-gray1">
                            Emily had always been fascinated by dolphins. When she heard about a place where she could
                            dive with them, she knew she had to go lorem ipsum dolor sit...
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button className="flex items-center gap-2 text-primary">
                                <p className="text-sm font-bold">Read More</p>
                                <img src={arrow} width="20px" alt="Arrow" />
                            </button>
                        </div>
                    </NavLink>
                    <NavLink to="/posts/1" className="rounded-2xl bg-white p-3 shadow-box">
                        <img src={about1} className="h-40 w-full rounded-2xl object-cover shadow-box" alt="" />
                        <p className="mb-3 mt-2 text-end text-xs font-semibold text-gray">27 Dec, 2022</p>
                        <h1 className="text-xl font-extrabold text-darkGray">Dive With Dolphins</h1>
                        <p className="text-sm text-gray1">
                            Emily had always been fascinated by dolphins. When she heard about a place where she could
                            dive with them, she knew she had to go lorem ipsum dolor sit...
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button className="flex items-center gap-2 text-primary">
                                <p className="text-sm font-bold">Read More</p>
                                <img src={arrow} width="20px" alt="Arrow" />
                            </button>
                        </div>
                    </NavLink>
                    <NavLink to="/posts/1" className="rounded-2xl bg-white p-3 shadow-box">
                        <img src={about1} className="h-40 w-full rounded-2xl object-cover shadow-box" alt="" />
                        <p className="mb-3 mt-2 text-end text-xs font-semibold text-gray">27 Dec, 2022</p>
                        <h1 className="text-xl font-extrabold text-darkGray">Dive With Dolphins</h1>
                        <p className="text-sm text-gray1">
                            Emily had always been fascinated by dolphins. When she heard about a place where she could
                            dive with them, she knew she had to go lorem ipsum dolor sit...
                        </p>
                        <div className="mt-4 flex justify-end">
                            <button className="flex items-center gap-2 text-primary">
                                <p className="text-sm font-bold">Read More</p>
                                <img src={arrow} width="20px" alt="Arrow" />
                            </button>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default PostsSection;
