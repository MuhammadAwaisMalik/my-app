import React from "react";

const Btn = ({
  type,
  className,
  btnText,
  click,
  data_target,
  data_toogle,
  data_dismiss,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={click}
      data-bs-toggle={data_toogle}
      data-bs-target={data_target}
      data-bs-dismiss={data_dismiss}
    >
      {btnText}
    </button>
  );
};

export default Btn;
