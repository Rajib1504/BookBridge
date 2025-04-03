import { FcGoogle } from "react-icons/fc";
import loginimg from "../../assets/Images/AuthenticationImage/loginimage.webp"
import { SiGithub } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
const Login = () => {
      return (
            <section className="flex justify-center items-center min-h-screen flex-col">
            <div className="mt-20 flex flex-wrap justify-between items-center w-11/12 mx-auto bg-[#f4d0f2a2] backdrop-blur-lg rounded-lg drop-shadow-2xl ">
            {/* Login Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={loginimg} alt="Login" className="rounded-lg rounded-r-none h-1/2" />
            </div>

            {/* Login Form */}
            <aside className="w-full  p-4  md:w-1/3 mx-auto flex-col  flex justify-center ">
            <h1 className="text-white mb-6 font-Gilda font-bold text-3xl md:text-5xl text-center">Log in</h1>
              <form className="flex flex-col gap-6 w-full max-w-md">
                <input
                  type="text"
                  placeholder="Email Address"
                  className=" font-Inter px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className=" font-Inter px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button className="font-Inter mt-3  bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
                 Sign in
                </button>
              </form>
              <div className="divider m-8">Or</div>
              <div className="flex justify-center items-center gap-5 "><FcGoogle className="text-4xl" />
              <SiGithub className="text-4xl" />
              <FaTwitter  className="text-4xl text-sky-400" />


              </div>
            </aside>
          </div>
          </section>
      );
};

export default Login;