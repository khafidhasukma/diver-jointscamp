import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import { useEffect, useState } from "react";
import moment from "moment";
import Sidebar from "../../../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactAdmin = () => {
    const [contact, setContact] = useState([]);

    const getData = () => {
        axiosInstance
            .get("/contact/gets")
            .then((response) => {
                const formattedDate = response.data.data.map((contact) => {
                    return {
                        ...contact,
                        created_at: moment(contact.created_at).format("L"),
                    };
                });
                setContact(formattedDate);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Delete
    const handleDelete = (id) => {
        axiosInstance
            .delete(`/contact/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`,
                },
            })
            .then(() => {
                setContact(contact.filter((contact) => contact.id !== id));
                toast.success("Successfully deleted message!");
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to delete message.");
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
                        Contact
                    </h1>

                    <table className="mt-8 w-full rounded-lg bg-white">
                        <tr className="border-b text-gray">
                            <th></th>
                            <th className="text-start">Name</th>
                            <th className="text-start">Email</th>
                            <th className="text-start">Message</th>
                            <th className="text-start">Date</th>
                            <th>Actions</th>
                        </tr>
                        {contact.map((contact, index) => (
                            <tr key={contact.id}>
                                <td width="5%" className="text-center">
                                    {index + 1}
                                </td>
                                <td width="15%">{contact.name}</td>
                                <td width="15%">{contact.email}</td>
                                <td width="30%">{trimDescription(contact.description, 50)}</td>
                                <td width="20%">{contact.created_at}</td>
                                <td width="30%" className="flex gap-2">
                                    <Link
                                        to={`/admin/contact/show/${contact.id}`}
                                        className="block rounded-lg bg-success px-3 py-2 font-bold text-white">
                                        View
                                    </Link>

                                    <button
                                        onClick={() => handleDelete(contact.id)}
                                        className="rounded-lg bg-delete px-3 py-2 font-bold text-white">
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

export default ContactAdmin;
