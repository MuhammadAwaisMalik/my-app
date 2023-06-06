import React, { useState } from "react";
import { Flag } from "semantic-ui-react";

const useClipBoard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = (text) => {
    if (typeof text === "string" || typeof text == "number") {
      navigator.clipboard.writeText(text.toString());
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    } else {
      setIsCopied(false);
    }
  };
  return [isCopied, handleCopy];
};

export default useClipBoard;
