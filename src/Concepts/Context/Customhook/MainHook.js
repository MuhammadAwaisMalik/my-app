import React from "react";
import useClipBoard from "./CustomHook/useClipBoard";
import Button from "../../../Reuseable/Btn";

const MainHook = () => {
  const [isCopied, handleCopy] = useClipBoard();
  let Name = "Muhammad";
  return (
    <>
      <button onClick={() => handleCopy(Name)}>
        {isCopied ? (
          <Button className="btn btn-success" btnText="Copied" />
        ) : (
          <Button className="btn btn-primary" btnText="Copy" />
        )}
      </button>
      <h1>{Name}</h1>
    </>
  );
};

export default MainHook;
