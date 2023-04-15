import search from "../../../assets/images/icons/search.svg";
import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import { useEffect, useState } from "react";
import moment from "moment";
import Sidebar from "../../../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostsAdmin = () => {
    const [posts, setPosts] = useState([]);

    // get data
    const getData = () => {
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
    };

    // Delete
    const handleDelete = (id) => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("Token")}`,
            },
        };

        axiosInstance
            .delete(`/story/delete/${id}`, config)
            .then(() => {
                setPosts(posts.filter((post) => post.id !== id));
                toast.success("Successfully deleted stories!");
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to delete stories.");
            });
    };

    const trimDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + " ...";
        }
        return description;
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="bg-bgAdmin">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="flex gap-8">
                <Sidebar />
                <div className="h-screen w-4/5 overflow-y-scroll px-4 py-6">
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
                            <tr key={post.id}>
                                <td width="5%" className="text-center">
                                    {index + 1}
                                </td>
                                <td width="15%">{post.title}</td>
                                <td width="45%">{trimDescription(post.description, 50)}</td>
                                <td width="15%">{post.created_at}</td>
                                <td width="30%" className="flex items-start gap-2">
                                    <Link
                                        to={`/admin/posts/show/${post.id}`}
                                        className="block rounded-lg bg-success px-3 py-2 font-bold text-white">
                                        View
                                    </Link>
                                    <Link
                                        to="/admin/posts/edit"
                                        className="block rounded-lg bg-primary px-3 py-2 font-bold text-white">
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="rounded-lg border-none bg-delete px-3 py-2 font-bold text-white">
                                        Delete
                                    </button>
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
