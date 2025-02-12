import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="Menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <a href="">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 text-center">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 p-2 rounded-r-full px-5 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://openclipart.org/image/2000px/247319"
        />
      </div>
    </div>
  );
};

export default Head;
