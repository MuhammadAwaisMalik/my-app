import React, { memo, forwardRef, useImperativeHandle } from "react";

const Child = ({ count }, ref) => {
  //   console.log("Child1");
  // useImperativeHandle(
  //   ref,
  //   () => {
  //     return {
  //       getConsole: Console,
  //     };
  //   },
  //   []
  // );
  // const Console = () => {
  //   console.log("Child Function call");
  // };
  console.log("child render");
  return (
    <div>
      Child Value:
      {count}
    </div>
  );
};

// export default memo(forwardRef(Child));
export default memo(Child);

// import React, { useEffect, useState } from "react";
// import FetchData from "./Reuseable/FetchData";

// const Child = () => {
//   const [count, setCount] = useState(0);

//   let data = {
//     id: 100,
//     title: "",
//     price: "",
//     category: "",
//     description: "",
//   };
//   useEffect(() => {
//     if (count > 0) {
//       FetchData("POST", "https://fakestoreapi.com/products", data).then(
//         (res) => {
//           console.log(res);
//         }
//       );
//     }
//   }, [count]);

//   return (
//     <div>
//       <button
//         className="btn btn-success"
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Post
//       </button>
//     </div>
//   );
// };

// export default Child;
