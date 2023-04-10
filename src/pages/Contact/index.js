import contactImage from "../../assets/images/contact.png";
import facebook from "../../assets/images/icons/facebook.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import instagram from "../../assets/images/icons/instagram.svg";

const Contact = () => {
    return (
        <div className="container py-12 md:py-24">
            <div className="gap-6 overflow-hidden rounded-2xl bg-white shadow-box md:grid md:grid-cols-2">
                <div className="px-8 py-12">
                    <div className="mb-6 flex gap-4">
                        <a href="https://www.facebook.com">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="https://www.twitter.com">
                            <img src={twitter} alt="Twitter" />
                        </a>
                        <a href="https://www.instagram.com">
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
                    <form className="mt-6">
                        <div className="mb-4">
                            <label for="name">Your name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-2 w-full rounded-lg bg-gray2 p-2 focus:outline-primary"
                            />
                        </div>
                        <div className="mb-4">
                            <label for="email">Your email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-2 w-full rounded-lg bg-gray2 p-2 focus:outline-primary"
                            />
                        </div>
                        <div className="mb-8">
                            <label for="email">Your message</label>
                            <textarea
                                rows="4"
                                className="mt-2 w-full rounded-lg bg-gray2 p-2 focus:outline-primary"></textarea>
                        </div>
                        <button className="w-full rounded-lg bg-primary px-4 py-2 font-medium tracking-wider text-white md:w-max">
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
