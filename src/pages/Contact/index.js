import contactImage from "../../assets/images/contact.png";
import facebook from "../../assets/images/icons/facebook.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import { useState } from "react";
import axiosInstance from "../../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email, message };
        axiosInstance
            .post("/contact/create", data)
            .then(() => {
                toast.success("Pesan berhasil terkirim!");
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.log(error);
                toast.error("Terjadi kesalahan saat mengirim pesan.");
            });
    };
    return (
        <div className="container min-h-screen py-12 md:py-24">
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
            <div className="gap-6 overflow-hidden rounded-2xl bg-white shadow-box md:grid md:grid-cols-2">
                <div className="px-8 py-12">
                    <div className="mb-6 flex gap-4">
                        <a
                            href="https://web.facebook.com/jointsugm?_rdc=1&_rdr"
                            className="transition-all duration-200 ease-in-out hover:scale-105">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a
                            href="https://twitter.com/jointsugm"
                            className="transition-all duration-200 ease-in-out hover:scale-105">
                            <img src={twitter} alt="Twitter" />
                        </a>
                        <a
                            href="https://www.instagram.com/jointsugm/"
                            className="transition-all duration-200 ease-in-out hover:scale-105">
                            <img src={instagram} alt="Instagram" />
                        </a>
                    </div>

                    <h1 className="mb-2 text-2xl font-extrabold md:text-3xl">
                        Let's <span className="text-primary">Talk</span>
                    </h1>
                    <p>
                        To request a quote or want to meet up for coffee, contact me directly or fill out the form and I
                        will get back to you soon.
                    </p>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label for="name">Your name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                className="mt-2 w-full rounded-lg bg-gray2 p-2 focus:outline-primary"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label for="email">Your email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="mt-2 w-full rounded-lg bg-gray2 p-2 focus:outline-primary"
                                required
                            />
                        </div>
                        <div className="mb-8">
                            <label for="message">Your message</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={message}
                                onChange={handleMessageChange}
                                className="mt-2 w-full rounded-lg bg-gray2 p-2 focus:outline-primary"
                                required></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-primary px-4 py-2 font-medium tracking-wider text-white transition-all duration-300 ease-in-out hover:border-primary2 hover:bg-primary2 hover:text-white md:w-max">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
                <img src={contactImage} className="hidden h-full object-cover md:block" alt="" />
            </div>
        </div>
    );
};

export default Contact;
