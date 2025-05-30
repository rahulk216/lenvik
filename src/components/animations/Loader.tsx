import Lottie from "react-lottie";
import * as gearLoader from "../../assets/gear-loader.json";
import logo from "../../assets/lenvik.png";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(gearLoader)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="" className="w-[200px]" />
        <Lottie options={defaultOptions} height={150} width={150} />
      </div>
    </div>
  );
};

export default Loader;
