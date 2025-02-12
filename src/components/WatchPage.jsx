import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams - ", searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });

  const collapseSidebar = () => {};
  return (
    <div className="p-5">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
};

export default WatchPage;
