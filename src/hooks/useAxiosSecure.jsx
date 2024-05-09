import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
//   baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate();
  // interceptor
  axiosSecure.interceptors.response.use(
    (res) => {
        console.log('response checked', res);
      return res;
    },
    async (error) => {
      console.log("error from interceptor: ", error.response);
      console.log("error", error);
      if(error.response.status === 401 || error.response.status === 403){
        await logOut()
        navigate('/login')
      }
      return Promise.reject(error)
    }
  );

//   axios.interceptors.request

  return axiosSecure;
};

export default useAxiosSecure;
