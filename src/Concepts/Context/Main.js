import React from "react";
import Com_1 from "./Com_1";
import Com_2 from "./Com_2";
import { MyContext } from "../../context/FetchContext";

const Main = () => {
  const [text, setText] = useState(false);
  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Com_1 />
            </div>
            <div className="col-8">
              <Com_2 />
            </div>
          </div>
        </div>
      </MyContext.Provider>
    </div>
  );
};

export default Main;
