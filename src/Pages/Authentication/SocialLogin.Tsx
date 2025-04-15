// @ts-nocheck
import useAxiosPublic from "../../Hooks/axiosPublic";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googlelogin } = useAuth();
  const navigate = useNavigate();
  const handlegoogleSignin = () => {
    googlelogin()
      .then((res: any) => {
        const userInfo = {
          name: res.user?.displayName,
          email: res.user?.email,
        };

        axiosPublic.post("/users", userInfo).then(() => {
          toast.success(`Welcome ${userInfo.name}`);
          navigate("/");
        });
      })
      .catch((err: any) => toast.error(err.message));
  };
  return (
    <>
      <FcGoogle
        onClick={handlegoogleSignin}
        className="text-4xl cursor-pointer"
      />
      <SiGithub className="text-4xl cursor-pointer" />
      <FaTwitter className="text-4xl text-sky-400 cursor-pointer" />
    </>
  );
};

export default SocialLogin;
