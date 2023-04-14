import { Link } from "react-router-dom";
import axiosInstance from "../../../utils/axios";
import { useEffect, useState } from "react";
import moment from "moment";
import Sidebar from "../../../components/Sidebar";

const ContactAdmin = () => {
    const [contact, setContact] = useState([]);
    useEffect(() => {
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
    }, []);
    const trimDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + " ...";
        }
        return description;
    };

    return (
        <div className="bg-bgAdmin text-sm">
            <div className="flex gap-8">
                <Sidebar />

                <div className="w-4/5 px-4 py-6">
                    <h1 className="relative mb-2 text-2xl font-extrabold text-gray1 after:absolute after:-bottom-2 after:left-0 after:h-[1.5px] after:w-full after:bg-[#EBEFF2] md:text-3xl">
                        Contact
                    </h1>

                    <table className="mt-8 w-full rounded-lg bg-white">
                        <tr className="border-b text-gray">
                            <th>No</th>
                            <th className="text-start">Name</th>
                            <th className="text-start">Email</th>
                            <th className="text-start">Message</th>
                            <th className="text-start">Date</th>
                            <th>Actions</th>
                        </tr>
                        {contact.map((contact, index) => (
                            <tr>
                                <td width="5%" className="text-center">
                                    {index + 1}
                                </td>
                                <td width="15%">{contact.name}</td>
                                <td width="15%">{contact.email}</td>
                                <td width="30%">{trimDescription(contact.description, 50)}</td>
                                <td width="20%">{contact.created_at}</td>
                                <td width="30%" className="flex gap-2">
                                    <div>
                                        <Link className="rounded bg-success px-5 py-2 font-medium text-white">
                                            View
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="rounded bg-delete px-5 py-2 font-medium text-white">
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

export default ContactAdmin;
