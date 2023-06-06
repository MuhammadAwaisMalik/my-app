import { useContext } from "react";
import { MyContext } from "../context/FetchContext";

function Com_1() {
  const { text, setText } = useContext(MyContext);

  return (
    <>
      <div>
        <button className="btn btn-success" onClick={() => setText(true)}>
          Click me
        </button>
      </div>
    </>
  );
}

export default Com_1;
