import search from "../../../assets/images/icons/search.svg";
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import { useEffect, useState } from "react";
import moment from "moment";
import Sidebar from "../../../components/Sidebar";

const PostsAdmin = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axiosInstance
            .get("/story/gets")
            .then((response) => {
                const formattedPosts = response.data.data.map((post) => {
                    return {
                        ...post,
                        created_at: moment(post.created_at).format("L"),
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
        <div className="bg-bgAdmin">
            <div className="flex gap-8">
                <Sidebar />
                <div className="w-4/5 px-4 py-6">
                    <h1 className="relative mb-2 text-2xl font-extrabold text-gray1 after:absolute after:-bottom-2 after:left-0 after:h-[1.5px] after:w-full after:bg-[#EBEFF2] md:text-3xl">
                        Stories
                    </h1>
                    <div className="my-8 flex w-full gap-4 rounded-lg bg-white px-4 py-2">
                        <img src={search} width="28" alt="" />
                        <input type="text" placeholder="Search Stories" className="w-full py-2 outline-none" />
                    </div>
                    <Link to="/admin/posts/create" className="rounded-lg bg-darkBlue px-8 py-3 font-bold text-white">
                        Add Stories
                    </Link>
                    <table className="mt-8 w-full rounded-lg bg-white">
                        <tr className="border-b text-gray">
                            <th></th>
                            <th className="text-start">Title</th>
                            <th className="text-start">Description</th>
                            <th className="text-start">Date Posting</th>
                            <th>Action</th>
                        </tr>
                        {posts.map((post, index) => (
                            <tr>
                                <td width="5%" className="text-center">
                                    {index + 1}
                                </td>
                                <td width="15%">{post.title}</td>
                                <td width="45%">{trimDescription(post.description, 50)}</td>
                                <td width="15%">{post.created_at}</td>
                                <td width="30%" className="flex gap-2">
                                    <div>
                                        <Link
                                            to={`/admin/posts/show/${post.id}`}
                                            className="rounded-lg bg-success px-3 py-2 font-bold text-white">
                                            View
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/admin/posts/edit"
                                            className="rounded-lg bg-primary px-3 py-2 font-bold text-white">
                                            Edit
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="rounded-lg bg-delete px-3 py-2 font-bold text-white">
                                            Delete
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PostsAdmin;
