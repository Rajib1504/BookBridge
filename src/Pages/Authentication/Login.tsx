import loginimg from "../../assets/Images/AuthenticationImage/loginimage.webp";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";


type LoginFormInputs = {
  email: string;
  password: string;
};


const Login = () => {
  const navigate = useNavigate()
  const {login}=useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    login(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success(`user Login by ${user.email}`)
        navigate('/')
      })
      .catch((err) => {
        console.error(err.message);
        toast.error(err.message)
        navigate('/')
      });
  };
  
  return (
    <section className="flex justify-center items-center min-h-screen flex-col">
      <div className="mt-20 flex flex-wrap justify-between items-center w-11/12 mx-auto rounded-lg">
        {/* Login Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={loginimg}
            alt="Login"
            className="rounded-lg rounded-r-none h-1/2"
          />
        </div>

        {/* Login Form */}
        <aside className="w-full p-4 md:w-1/3 mx-auto flex-col flex justify-center">
          <h1 className="mb-6 font-Gilda font-bold text-3xl md:text-5xl text-center">
            Log in
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 w-full max-w-md"
          >
            <input
              type="text"
              {...register("email", { required: "Email is required" })}
              placeholder="Email Address"
              className="font-Inter px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-gray-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              className="font-Inter px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-gray-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <button
              type="submit"
              className="font-Inter mt-3 bg-[#FFB237] text-white py-2 rounded-lg hover:bg-[#d62928] transition"
            >
              Sign in
            </button>
          </form>

          <div className="divider m-8">Or</div>

          <div className="flex justify-center items-center gap-5">
           <SocialLogin/>
          </div>
          <span className="flex justify-center items-center mt-7 gap-1">
            Create an 
<Link to={'/signup'} className="text-blue-500 hover:underline">account</Link>
          </span>
        </aside>
      </div>
    </section>
  );
};

export default Login;
