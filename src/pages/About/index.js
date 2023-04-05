import about from "../../assets/images/about.png";

const About = () => {
    return (
        <div className="container">
            <h1 className="py-12 text-center text-3xl font-bold md:pt-24">About Me</h1>
            <p className="text-lg font-bold lg:text-xl">hello,</p>
            <h1 className="text-2xl font-bold leading-10 sm:w-2/3 md:w-3/4 md:text-3xl xl:w-1/2">
                I’m John Doe, <br />I can provide you with a new and creative diving experience right away!
            </h1>
            <p className="my-6 leading-7 tracking-wide">
                I first fell in love with diving when I was 18 years old, and since then I have traveled all around the
                world to explore the most amazing dive sites. From the coral reefs of the Caribbean to the shipwrecks of
                the Pacific, I have had the privilege of witnessing some of the most breathtaking sights on the planet.
                Through my experiences, I have come to realize how important it is to protect and preserve our oceans.
                As divers, we have a unique perspective on the fragility of these ecosystems, and it is up to us to
                ensure that they are safeguarded for future generations.
            </p>
            <img src={about} className="h-64 w-full rounded-2xl object-cover shadow-box lg:h-80" alt="" />
            <p className="mt-12 text-lg font-bold lg:text-xl">achivement,</p>
            <h1 className="text-2xl font-bold leading-10 lg:text-3xl">personal awards</h1>
            <div className="mb-16 mt-6 md:grid md:grid-cols-4 lg:gap-2">
                <div className="md:col-span-2 md:mb-6 lg:col-span-1">
                    <p className="font-extrabold">2022</p>
                    <p className="font-semibold leading-7">
                        Achievement Awards 2022 <br /> Category: Technical Diving
                    </p>
                </div>
                <div className="mb-6 md:col-span-2 lg:col-span-3">
                    <p className="font-medium leading-7">
                        In 2022, I broke several world records in technical diving and made significant contributions to
                        the development of the sport. My outstanding achievement has inspired many to continue advancing
                        the sport.
                    </p>
                </div>
                <div className="md:col-span-2 md:mb-6 lg:col-span-1">
                    <p className="font-extrabold">2021</p>
                    <p className="font-semibold leading-7">
                        Achievement Awards 2021 <br /> Category: Free Diving
                    </p>
                </div>
                <div className="mb-6 md:col-span-2 lg:col-span-3">
                    <p className="font-medium leading-7">
                        In 2021, I achieved remarkable accomplishments in free diving, breaking several world records
                        and taking the sport to new heights. My dedication and passion for free diving serve as an
                        inspiration to others.
                    </p>
                </div>
                <div className="md:col-span-2 md:mb-6 lg:col-span-1">
                    <p className="font-extrabold">2020</p>
                    <p className="font-semibold leading-7">
                        Achievement Awards 2020 <br /> Category: Cave Diving
                    </p>
                </div>
                <div className="mb-6 md:col-span-2 lg:col-span-3">
                    <p className="font-medium leading-7">
                        In 2020, I made significant contributions to cave diving, with my discoveries and explorations
                        leading to new understandings of the underwater world. My bravery and willingness to push the
                        boundaries of the sport are truly commendable.
                    </p>
                </div>
                <div className="md:col-span-2 md:mb-6 lg:col-span-1">
                    <p className="font-extrabold">2019</p>
                    <p className="font-semibold leading-7">
                        Achievement Awards 2019 <br /> Category: Conservation Diving
                    </p>
                </div>
                <div className="mb-6 md:col-span-2 lg:col-span-3">
                    <p className="font-medium leading-7">
                        In 2019, I dedicated myself to conservation diving, working to protect marine life and
                        ecosystems through sustainable diving practices and community outreach. My efforts have made a
                        positive impact on the underwater world and I am committed to continuing this important work.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
