// import { memo, useEffect, useMemo, useState } from "react";
// import FetchData from "./Reuseable/FetchData";

// const Child2 = ({ count }) => {
// const [count, setCount] = useState(0);
// useEffect(() => {
//   if (count > 0) {
//     FetchData("GET", "https://fakestoreapi.com/products").then((data) => {
//       console.log("Data Get:", data);
//     });
//   }
// }, [count]);

// return (
//   <div>
//     <button
//       className="btn btn-primary"
//       onClick={() => {
//         setCount(count + 1);
//       }}
//     >
//       Fetch
//     </button>
//   </div>
// );
//   return useMemo(() => {
//     console.log("child");
//     return (
//       <>
//         <h2>{count}</h2>
//       </>
//     );
//   }, [count]);
// };
// export default Child2;
import { memo } from "react";

const Child2 = ({ todos, addTodo }) => {
  // console.log("child render");
  function HighOrder(operation, numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
      result = operation(result, numbers[i]);
    }
    if (operation === Sum) {
      return result - 1;
    } else {
      return result;
    }
  }
  function Sum(number1, number2) {
    return number1 + number2;
  }
  function multiply(number1, number2) {
    return number1 * number2;
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log(HighOrder(Sum, numbers));
  console.log(HighOrder(multiply, numbers));

  // let data = 10;
  // const custom = function(x){
  //   return x
  // }
  // let result = custom((x)=> x+10)
  // console.log()
  return (
    <>
      {/* <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button> */}
    </>
  );
};

export default memo(Child2);
