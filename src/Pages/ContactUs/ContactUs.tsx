
import Swal from "sweetalert2";
import contactBG from "../../assets/pageBackground/contactBG.jpg"
import { MdArrowForward } from "react-icons/md";
import store1 from "../../assets/stores/store-1.jpg"
import store2 from "../../assets/stores/store-2.jpg"
import store3 from "../../assets/stores/store-3.jpg"
import store4 from "../../assets/stores/store-4.jpg"
const ContactUs = () => {

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        // your logic here

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Message sent in successfully"
        });
    };

    return (
        <div className="mt-16">
            {/* Backgroud Image section */}
            <div
                className="hero h-64"
                style={{
                    backgroundImage: `url(${contactBG})`,
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-white text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 font-Gilda text-5xl">Contact</h1>
                    </div>
                </div>
            </div>



            <div className="max-w-7xl mx-auto p-4">
                {/* Contact Form Section */}

                <div className="flex gap-30">
                    {/* Adress Info */}
                    <div className="my-20">
                        <h2 className="text-4xl font-Gilda pb-5">Main Office</h2>

                        <div className="space-y-4">
                            <div className="font-Inter space-y-2">
                                <h5 className="font-bold text-lg">Adress</h5>
                                <p className="text-base-content text-base">1800 Abbot Kinney Blvd. Unit D & E Venice</p>
                            </div>

                            <div className="font-Inter space-y-2">
                                <h5 className="font-bold text-lg">Contact</h5>
                                <p className="text-base-content text-base">Mobile: <span className="font-bold">(+88) - 1990 - 6886</span></p>
                                <p className="text-base-content text-base">Hotline: <span className="font-bold">1800 - 1102</span></p>
                                <p>Mail: contact@maxcoach.com</p>
                            </div>

                            <div className="font-Inter space-y-2">
                                <h5 className="font-bold text-lg">Hour of operation</h5>
                                <p className="text-base-content text-base">Monday - Friday: 09:00 - 20:00</p>
                                <p className="text-base-content text-base">Sunday & Saturday: 10:30 - 22:00</p>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="my-20 flex-1">
                        <h2 className="text-4xl font-Gilda pb-5">Send A Message</h2>
                        <form onSubmit={handleSendMessage} className="w-full space-y-4">
                            <div className="flex gap-x-4">
                                <input type="text" name="name" placeholder="Your Name" className="input py-6 rounded-sm w-full" />
                                <input type="email" name="email" placeholder="Your Email" className="input py-6 rounded-sm w-full" />
                            </div>
                            <input type="text" name="subject" placeholder="Your Subject" className="input py-6 rounded-sm w-full" />
                            <textarea className="textarea h-44 w-full rounded-sm" placeholder="Your Message" name="message"></textarea>

                            <button className="btn btn-lg px-16 text-sm font-Inter tracking-wider font-normal bg-[#d62928] text-white border-none hover:bg-[#ffb237]">SEND <MdArrowForward className="text-lg"></MdArrowForward> </button>
                        </form>
                    </div>
                </div>

                <div className="divider"></div>

                {/* Our Stores section */}
                <div className="my-20">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-Gilda">Our Stores</h2>
                        <p className="text-base-content text-base">Check our lovely stores worldwide</p>
                    </div>

                    <div className="grid grid-cols-4 gap-10">
                        {/* Store Card -1 */}
                        <div>
                            <div>
                                <img className="rounded-sm" src={store1} alt="StoreImage" />
                            </div>
                            <div className="font-Inter space-y-2 mt-4">
                                <h5 className="font-Gilda text-3xl">New York</h5>
                                <p className="text-base-content text-base">1316 Abbot Kinney Blvd.</p>
                                <p className="text-base-content text-base">+31123456789</p>
                            </div>
                        </div>

                        {/* Store Card -2 */}
                        <div>
                            <div>
                                <img className="rounded-sm" src={store2} alt="StoreImage" />
                            </div>
                            <div className="font-Inter space-y-2 mt-4">
                                <h5 className="font-Gilda text-3xl">Thailand</h5>
                                <p className="text-base-content text-base">2019 Wandavision Blvd.</p>
                                <p className="text-base-content text-base">+31123456789</p>
                            </div>
                        </div>

                        {/* Store Card -3 */}
                        <div>
                            <div>
                                <img className="rounded-sm" src={store3} alt="StoreImage" />
                            </div>
                            <div className="font-Inter space-y-2 mt-4">
                                <h5 className="font-Gilda text-3xl">France</h5>
                                <p className="text-base-content text-base">1316 Jack Snyder Blvd.</p>
                                <p className="text-base-content text-base">+31123456789</p>
                            </div>
                        </div>

                        {/* Store Card -4 */}
                        <div>
                            <div>
                                <img className="rounded-sm" src={store4} alt="StoreImage" />
                            </div>
                            <div className="font-Inter space-y-2 mt-4">
                                <h5 className="font-Gilda text-3xl">Japan</h5>
                                <p className="text-base-content text-base">316 Kim Berly Blvd.</p>
                                <p className="text-base-content text-base">+31123456789</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;