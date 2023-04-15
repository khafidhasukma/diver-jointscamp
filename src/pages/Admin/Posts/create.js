import Sidebar from "../../../components/Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../../../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import upload from "../../../assets/images/icons/upload.svg";

const CreatePost = () => {
    const [photo, setPhoto] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setMessage] = useState("");

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);
        setPhotoUrl(URL.createObjectURL(file));
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        const post = { title, description };
        data.append("data", JSON.stringify(post));
        data.append("file", photo);

        axiosInstance
            .post("/story/create", data, {
                headers: {
                    Authorization: `${localStorage.getItem("Token")}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                toast.success("Story successfully created!");
                setTitle("");
                setMessage("");
                setPhoto(null);
                setPhotoUrl(null);
            })
            .catch((error) => {
                console.log(error);
                toast.error("Failed to create story.");
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
                        Add Stories
                    </h1>
                    <Link to="/admin/posts/" className="rounded-lg bg-success px-8 py-2 font-bold text-white">
                        Back
                    </Link>
                    <div className="mt-8 rounded-2xl bg-white p-5 shadow-box">
                        <form className="mt-6 grid grid-cols-3 gap-6" onSubmit={handleSubmit}>
                            <div>
                                <label for="photo" className="cursor-pointer">
                                    {photoUrl ? (
                                        <div className="h-80 w-full overflow-hidden rounded-lg">
                                            <img src={photoUrl} alt="Preview" className="h-full w-full object-cover" />
                                        </div>
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray2">
                                            <img src={upload} className="h-16" alt="" />
                                        </div>
                                    )}
                                </label>
                                <input
                                    type="file"
                                    id="photo"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    className="hidden"
                                    required
                                />
                            </div>
                            <div className="col-span-2">
                                <div className="mb-4">
                                    <label for="title">Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        value={title}
                                        onChange={handleTitleChange}
                                        className="mt-2 w-full rounded-lg bg-gray2 p-2 focus:outline-primary"
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="message">Description</label>
                                    <textarea
                                        id="message"
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
                                Add Stories
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
