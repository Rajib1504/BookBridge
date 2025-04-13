import loginimg from "../../assets/Images/AuthenticationImage/loginimage.webp";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/axiosPublic";


const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {Register,updateUserProfile}=useAuth()
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
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    const { email, password, FirstName, LastName, profile } = data;
    const fullName = `${FirstName} ${LastName}`;
// console.log(data)
    Register(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user)
        updateUserProfile(fullName, profile)
          .then(() => {
            const userInfo = { name: fullName, email, profile,role:'user' };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log(user)
                toast.success(`Sign Up Successful: ${user.email}`)
                navigate("/");
                reset();
              }
            });
          })
          .catch((err) => {
            toast.error("Profile update failed:", err.message);
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error(`${error.message}`)
      });
  };



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
            className="flex flex-col gap-4 w-full max-w-md  p-6 rounded-lg "
          >
            <div className="flex gap-4">
              <input
                
                placeholder="First Name"
                className="w-1/2  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                {...register("FirstName", { required: "Name is Required" })}
                />
                {/* {errors.FirstName && <p className="text-red-500">{errors.FirstName.message}</p>} */}
              <input
                {...register("LastName", { required: "Last name is Required" })}
                placeholder="Last Name"
                className="w-1/2  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              {/* {errors.LastName && <p className="text-red-500">{errors.LastName.message}</p>} */}
            </div>
            <input
              {...register("email", { required: "email is Required" })}
              placeholder="Email Address"
              className="  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 12,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
              placeholder="Password"
              className="  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.password?.type === "required" && (
                    <p className="text-red-500">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500">Password must be lest 6</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500">
                      Password must contain at least one special charecter,
                      least 8 characters,one lowercase,one uppercase ,one digit
                    </p>
                  )}

            <input
            type="url"
              {...register("profile", {
                required: "profile image is Required",
              })}
              placeholder="Profile Image URL"
              className="  px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.profile && <p className="text-red-500">{errors.profile.message}</p>}
            <button
              type="submit"
              className="mt-3   bg-[#FFB237] text-white py-2 rounded-lg hover:bg-[#d62928] transition font-semibold"
            >
              Sign Up
            </button>
          </form>
          <div className="my-6 text-gray-600">Or Sign Up With</div>
          <div className="flex justify-center items-center gap-6">
            
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SignUp;
