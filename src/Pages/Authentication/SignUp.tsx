import { FcGoogle } from "react-icons/fc";
import loginimg from "../../assets/Images/AuthenticationImage/loginimage.webp";
import { SiGithub } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const SignUp = () => {
  return (
    <section className="flex justify-center items-center min-h-screen flex-col bg-base-200 ">
      <div className="mt-20 flex flex-wrap justify-between items-center w-11/12 mx-auto rounded-lg  ">
        {/* Register Image */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img src={loginimg} alt="Login" className="rounded-lg rounded-r-none " />
        </div>

        {/* Register Form */}
        <aside className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="py-3 font-bold text-3xl md:text-5xl text-center font-Gilda text-gray-800">Sign Up</h1>
          <form className="flex flex-col gap-6 w-full max-w-md  p-6 rounded-lg ">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <input
              type="url"
              placeholder="Profile Image URL"
              className="  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button className="mt-3   bg-[#FFB237] text-white py-2 rounded-lg hover:bg-[#d62928] transition font-semibold">
              Sign Up
            </button>
            
          </form>
          <div className="my-6 text-gray-600">Or Sign Up With</div>
          <div className="flex justify-center items-center gap-6">
            <FcGoogle className="text-4xl cursor-pointer" />
            <SiGithub className="text-4xl cursor-pointer" />
            <FaTwitter className="text-4xl text-sky-400 cursor-pointer" />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SignUp;
