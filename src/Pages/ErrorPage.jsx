import { useNavigate } from "react-router-dom";
import errrImg from "../assets/images/error.png";
import { FaLongArrowAltLeft } from "react-icons/fa";



const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBackBtn = ()=>{
        navigate('/');
    }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-5 p-4">
      <img
        className=" md:max-w-[520px] rounded-3xl mb-3"
        src={errrImg}
        alt="error"
      />
      <h2 className="text-3xl md:text-5xl font-bold">
        Oops! Something Went Wrong.
      </h2>
      <p className="text-base md:text-lg w-11/12 md:w-2/3 lg:w-1/2 text-center">
        It looks like we hit a little snag. The page you are looking for is not
        available right now. Try refreshing the page, or head back to our
        homepage to continue exploring.
      </p>
      <button onClick={handleBackBtn} className="px-8 py-3 rounded-full bg-primary hover:bg-purple-700 text-white text-base md:text-lg focus:outline-none mt-2 flex items-center gap-2">
        <FaLongArrowAltLeft />
        <span>Back To Home</span>
      </button>
    </div>
  );
};

export default ErrorPage;
