import axios from "axios";

const axiosPublic = axios.create({
  // local api
  baseURL: "http://localhost:5000",
  // todo: need to add live api
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
