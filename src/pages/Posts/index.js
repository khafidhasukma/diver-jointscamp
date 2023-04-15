import { NavLink } from "react-router-dom";
import arrow from "../../assets/images/icons/arrow.svg";
import axiosInstance from "../../utils/axios";
import { useEffect, useState } from "react";
import moment from "moment";

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axiosInstance
            .get("/story/gets")
            .then((response) => {
                const formattedPosts = response.data.data.map((post) => {
                    return {
                        ...post,
                        created_at: moment(post.created_at).format("ll"),
                    };
                });
                setPosts(formattedPosts);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const trimDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + " ...";
        }
        return description;
    };

    return (
        <div className="container min-h-screen py-12 md:py-24">
            {posts[0] && (
                <NavLink to={`/posts/${posts[0].id}`}>
                    <div className="group mb-6 items-center overflow-hidden rounded-2xl bg-white shadow-box transition-all duration-300 ease-in-out hover:border-hoverbox hover:bg-hoverbox sm:grid sm:grid-cols-2">
                        <img src={posts[0].photo} className="h-full w-full  object-cover" alt="" />
                        <div className="p-6">
                            <p className="mb-3 text-sm font-semibold text-gray">{posts[0].created_at}</p>
                            <h1 className="mb-6 text-2xl font-extrabold text-darkGray">{posts[0].title}</h1>
                            <p className="text-gray1">{trimDescription(posts[0].description, 300)}</p>
                            <div className="mt-6">
                                <button className="flex items-center gap-2 text-primary">
                                    <p className="text-sm font-bold">Read More</p>
                                    <img
                                        className="transform transition-all duration-300 ease-in-out group-hover:translate-x-1"
                                        src={arrow}
                                        width="20px"
                                        alt="Arrow"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </NavLink>
            )}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {posts.slice(1).map((post) => (
                    <NavLink
                        key={post.id}
                        to={`/posts/${post.id}`}
                        className="group rounded-2xl bg-white p-3 shadow-box transition-all duration-300 ease-in-out hover:border-hoverbox hover:bg-hoverbox">
                        <img src={post.photo} className="h-40 w-full rounded-2xl object-cover shadow-box" alt="" />
                        <p className="mb-3 mt-2 text-end text-xs font-semibold text-gray">{post.created_at}</p>
                        <h1 className="mb-2 text-xl font-extrabold text-darkGray">{post.title}</h1>
                        <p className="text-sm text-gray1">{trimDescription(post.description, 100)}</p>
                        <div className="mt-4 flex justify-end">
                            <button className="flex items-center gap-2 text-primary">
                                <p className="text-sm font-bold">Read More</p>
                                <img
                                    className="transform transition-all duration-300 ease-in-out group-hover:translate-x-1"
                                    src={arrow}
                                    width="20px"
                                    alt="Arrow"
                                />
                            </button>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Post;
