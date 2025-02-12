// import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import Button from "./Button";

const ButtonList = () => {
  //   console.log("API = ", YOUTUBE_VIDEOS_API);

  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Valentines" />
    </div>
  );
};

export default ButtonList;
