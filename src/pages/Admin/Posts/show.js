import axiosInstance from "../../../utils/axios";
import { useEffect, useState } from "react";
import moment from "moment";
import Sidebar from "../../../components/Sidebar";
import { useParams, Link } from "react-router-dom";

const ShowPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        axiosInstance
            .get(`/story/get/${id}`)
            .then((response) => {
                const formattedPost = {
                    ...response.data.data,
                    created_at: moment(response.data.data.created_at).format("ll"),
                };
                setPost(formattedPost);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="bg-bgAdmin">
            <div className="flex gap-8">
                <Sidebar />
                <div className="w-4/5 px-4 py-6">
                    <h1 className="relative mb-8 text-2xl font-extrabold text-gray1 after:absolute after:-bottom-2 after:left-0 after:h-[1.5px] after:w-full after:bg-gray md:text-3xl">
                        Detail Stories
                    </h1>
                    <div className="flex gap-x-2">
                        <Link
                            to="/admin/posts/"
                            className="rounded-lg border-2 border-success bg-success px-6 py-2 font-bold text-white">
                            Back
                        </Link>
                        <Link
                            to="/admin/posts/edit"
                            className="rounded-lg border-2 border-success px-6 py-2 font-bold text-success">
                            Edit
                        </Link>
                    </div>

                    <div className="mt-8 w-full rounded-lg bg-white p-8">
                        <div className="grid grid-cols-3 gap-8">
                            <img
                                src={post.photo}
                                className="h-48 w-full rounded-2xl object-cover shadow-box md:h-72"
                                alt=""
                            />
                            <div className="col-span-2">
                                <div className="mb-6">
                                    <p className="text- relative mb-2 font-extrabold after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-full after:bg-gray">
                                        Title
                                    </p>
                                    <p className="pt-2 font-medium text-darkGray">{post.title}</p>
                                </div>
                                <div className="mb-6">
                                    <p className="text- relative mb-2 font-extrabold after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-full after:bg-gray">
                                        Created At
                                    </p>
                                    <p className="pt-2 font-medium text-darkGray">{post.created_at}</p>
                                </div>
                                <div className="mb-6">
                                    <p className="text- relative mb-2 font-extrabold after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-full after:bg-gray">
                                        Description
                                    </p>
                                    <p className="pt-2 font-medium text-darkGray">{post.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowPost;
