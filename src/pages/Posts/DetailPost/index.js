import about2 from "../../../assets/images/about2.png";
import axiosInstance from "../../../utils/axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";

const DetailPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

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
        <div className="container py-12 md:py-24">
            <img src={post.photo} className="h-60 w-full rounded-2xl object-cover shadow-box md:h-96" alt="" />
            <p className="mb-6 mt-4 font-semibold text-gray">{post.created_at}</p>
            <h1 className="mb-8 text-center text-2xl font-extrabold text-darkGray md:text-3xl">{post.title}</h1>
            <p className="text-justify">{post.description}</p>
        </div>
    );
};

export default DetailPost;
