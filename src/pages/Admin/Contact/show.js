import axiosInstance from "../../../utils/axios";
import { useEffect, useState } from "react";
import moment from "moment";
import Sidebar from "../../../components/Sidebar";
import { useParams, Link } from "react-router-dom";

const ShowContact = () => {
    const { id } = useParams();
    const [contact, setContact] = useState([]);
    useEffect(() => {
        axiosInstance
            .get(`/contact/get/${id}`)
            .then((response) => {
                const formattedPost = {
                    ...response.data.data,
                    created_at: moment(response.data.data.created_at).format("ll"),
                };
                setContact(formattedPost);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="bg-bgAdmin">
            <div className="flex gap-8">
                <Sidebar />
                <div className="h-screen w-4/5 overflow-y-scroll px-4 py-6">
                    <h1 className="relative mb-8 text-2xl font-extrabold text-gray1 after:absolute after:-bottom-2 after:left-0 after:h-[1.5px] after:w-full after:bg-gray md:text-3xl">
                        Detail Contact
                    </h1>
                    <Link
                        to="/admin/contact/"
                        className="rounded-lg border-2 border-success bg-success px-6 py-2 font-bold text-white">
                        Back
                    </Link>

                    <div className="mt-8 w-full rounded-lg bg-white p-8">
                        <table>
                            <tr>
                                <td className="font-bold">Name</td>
                                <td>:</td>
                                <td>{contact.name}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Email</td>
                                <td>:</td>
                                <td>{contact.email}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Created At</td>
                                <td>:</td>
                                <td>{contact.created_at}</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Message</td>
                                <td>:</td>
                                <td>{contact.description}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowContact;
