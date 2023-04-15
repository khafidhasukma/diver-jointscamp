import Sidebar from "../../../components/Sidebar";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditPost = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axiosInstance
            .get(`/story/get/${id}`)
            .then((response) => {
                setTitle(response.data.data.title);
                setDescription(response.data.data.description);
                setPhotoUrl(response.data.data.photo);
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message);
            });
    }, [id]);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);
        setPhotoUrl(URL.createObjectURL(file));
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        const post = { title, description };
        data.append("data", JSON.stringify(post));
        if (photo) {
            data.append("file", photo);
        } else {
            data.append("file", photoUrl);
        }

        axiosInstance
            .patch(`/story/update/${id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                toast.success("Stories updated successfully!");
                setTimeout(() => {
                    navigate("/admin/posts");
                }, 1000);
            })
            .catch((error) => {
                console.log(error);
                toast.error("Failed to update stories!");
            });
    };

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
                    <h1 className="relative mb-8 text-2xl font-extrabold text-gray1 after:absolute after:-bottom-2 after:left-0 after:h-[1.5px] after:w-full after:bg-[#EBEFF2] md:text-3xl">
                        Edit Stories
                    </h1>
                    <Link to="/admin/posts/" className="rounded-lg bg-success px-8 py-2 font-bold text-white">
                        Back
                    </Link>
                    <div className="mt-8 rounded-2xl bg-white p-5 shadow-box">
                        <form className="mt-6 grid grid-cols-3 gap-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="photo" className="cursor-pointer">
                                    {photoUrl ? (
                                        <div className="h-80 w-full overflow-hidden rounded-lg">
                                            <img src={photoUrl} alt="Preview" className="h-full w-full object-cover" />
                                        </div>
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray2">
                                            <img src={photo} className="h-16" alt="" />
                                        </div>
                                    )}
                                </label>
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    className="hidden"
                                />
                            </div>
                            <div className="col-span-2">
                                <div className="mb-4">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={title}
                                        onChange={handleTitleChange}
                                        className="mt-2 w-full rounded-lg bg-gray2 p-2 focus:outline-primary"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message">Description</label>
                                    <textarea
                                        id="message"
                                        name="description"
                                        rows="8"
                                        value={description}
                                        onChange={handleDescChange}
                                        className="mt-2 w-full rounded-lg bg-gray2 p-2 focus:outline-primary"
                                        required></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-darkBlue px-4 py-2 font-medium tracking-wider text-white transition-all duration-300 ease-in-out hover:text-white md:w-max">
                                Edit Stories
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPost;
