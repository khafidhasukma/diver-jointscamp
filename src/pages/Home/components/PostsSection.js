import { NavLink } from "react-router-dom";
import arrow from "../../../assets/images/icons/arrow.svg";
import axiosInstance from "../../../utils/axios";
import { useEffect, useState } from "react";
import moment from "moment";

const PostsSection = () => {
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
        <div className="bg-primary py-16 text-white">
            <div className="container">
                <div className="mb-8 grid justify-between gap-6 md:grid-cols-3">
                    <div className="text-center md:col-span-2 md:text-start">
                        <h1 className="title mb-3">Stories and Adventures</h1>
                        <p className="subtitle">
                            Inspiring Stories and Adventures from Scuba Diving Enthusiasts Around the World
                        </p>
                    </div>
                    <div className="justify-self-center md:justify-self-end">
                        <NavLink to="/posts" className="button_primary w-max bg-white text-primary">
                            <p>See More</p>
                            <img src={arrow} width="20px" alt="Arrow" />
                        </NavLink>
                    </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {posts.slice(0, 4).map((post) => (
                        <NavLink key={post.id} to={`/posts/${post.id}`} className="rounded-2xl bg-white p-3 shadow-box">
                            <img src={post.photo} className="h-40 w-full rounded-2xl object-cover shadow-box" alt="" />
                            <p className="mb-3 mt-2 text-end text-xs font-semibold text-gray">{post.created_at}</p>
                            <h1 className="mb-2 text-xl font-extrabold text-darkGray">{post.title}</h1>
                            <p className="text-sm text-gray1">{trimDescription(post.description, 100)}</p>
                            <div className="mt-4 flex justify-end">
                                <button className="flex items-center gap-2 text-primary">
                                    <p className="text-sm font-bold">Read More</p>
                                    <img src={arrow} width="20px" alt="Arrow" />
                                </button>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostsSection;
