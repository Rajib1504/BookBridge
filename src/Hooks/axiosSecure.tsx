import axios from "axios";

const axiosSecure = axios.create({
  // local api
  baseURL: "http://localhost:5000",
  // todo: need to add live api
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
