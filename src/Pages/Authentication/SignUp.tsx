import { FcGoogle } from "react-icons/fc";
import loginimg from "../../assets/Images/AuthenticationImage/loginimage.webp";
import { SiGithub } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const SignUp = () => {
  const navigate = useNavigate()

  type FormData = {
    email: string;
    password: string;
    FirstName: string;
    LastName: string;
    profile: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
 
  };
  const {googlelogin}=useAuth()
const handlegoogleSignin=()=>{
  console.log("clicked")
  googlelogin().then((res)=>{
    const userInfo = {
      Name: res.user?.displayName,
    email: res.user?.email,
  }
    console.log(userInfo)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `wellcome ${userInfo.Name} `,
      showConfirmButton: false,
      timer: 1000
    });
    navigate('/');
})
.catch((err)=>console.log(err.message))
} 

  return (
    <section className="flex justify-center items-center min-h-screen  flex-col bg-base-200 ">
      <div className="mt-20 flex flex-wrap justify-between items-center w-11/12 mx-auto rounded-lg  ">
        {/* Register Image */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img
            src={loginimg}
            alt="Login"
            className="rounded-lg rounded-r-none "
          />
        </div>

        {/* Register Form */}
        <aside className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="py-3 font-bold text-3xl md:text-5xl text-center font-Gilda text-gray-800">
            Sign Up
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 w-full max-w-md  p-6 rounded-lg "
          >
            <div className="flex gap-4">
              <input
                {...register("FirstName", { required: "Name is Required" })}
                placeholder="First Name"
                className="w-1/2  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              {errors.FirstName && <p>{errors.FirstName.message}</p>}
              <input
                {...register("LastName", { required: "Last name is Required" })}
                placeholder="Last Name"
                className="w-1/2  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              {errors.LastName && <p>{errors.LastName.message}</p>}
            </div>
            <input
              {...register("email", { required: "email is Required" })}
              placeholder="Email Address"
              className="  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
              {...register("password", { required: "password is Required" })}
              placeholder="Password"
              className="  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input
              {...register("profile", {
                required: "profile image is Required",
              })}
              placeholder="Profile Image URL"
              className="  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.profile && <p>{errors.profile.message}</p>}
            <button
              type="submit"
              className="mt-3   bg-[#FFB237] text-white py-2 rounded-lg hover:bg-[#d62928] transition font-semibold"
            >
              Sign Up
            </button>
          </form>
          <div className="my-6 text-gray-600">Or Sign Up With</div>
          <div className="flex justify-center items-center gap-6">
            <FcGoogle
              onClick={handlegoogleSignin}
              className="text-4xl cursor-pointer"
            />
            <SiGithub className="text-4xl cursor-pointer" />
            <FaTwitter className="text-4xl text-sky-400 cursor-pointer" />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SignUp;
