import { useState } from "react";
import { VscSymbolProperty } from "react-icons/vsc";

import "./styles.css";
export default function Daraje2() {
  const [userNoA, setUserNoA] = useState(null);
  const [userNoB, setUserNoB] = useState(null);
  const [userNoC, setUserNoC] = useState(null);
  function Delta(A, B, C) {
    var delta_answer = B * B - 4 * (A * C);
    if (delta_answer < 0) {
      return "دلتا ریشه ندارد";
    } else if (delta_answer === 0) {
      var rishe_mozaaf = ((B * -1) / 2) * A;
      return "ریشه مضاعف دارد";
    } else if (delta_answer > 0) {
      var rishe_aval = (B * -1 - Math.floor(Math.sqrt(delta_answer))) / (2 * A);
      var rishe_dovom =
        (B * -1 + Math.floor(Math.sqrt(delta_answer))) / (2 * A);
      var javab = "ریشه اول " + rishe_aval + "ریشه دوم" + rishe_dovom;
      return javab;
    }
  }

  return (
    <div className="container-daraje2-main">
      <h2>
        جعبه ابزار <VscSymbolProperty />
      </h2>
      <p> :حل معادله درجه دو</p>
      <section>
        شما برای حل معادله درجه دوم و به دست آوردن ریشه های آن کافیست اعدادی که
        در کنار مجهول قرار دارند را در کادری که برای شما قرار دادیم وارد کنید{" "}
        <br></br>بخش اول معادله به توان دو میباشد -
      </section>
      <div className="wrapper-daraje-2">
        <h1 className="delta-information">
          a({" "}
          <input
            placeholder={"A"}
            value={userNoA}
            onChange={(event) => {
              setUserNoA(event.target.value);
            }}
            style={{
              width: "20px",
              height: "40px",
              textAlign: "center",
            }}
          />{" "}
          )۲+({" "}
          {
            <input
              placeholder={"B"}
              value={userNoB}
              onChange={(event) => {
                setUserNoB(event.target.value);
              }}
              style={{
                width: "20px",
                height: "40px",
                textAlign: "center",
              }}
            />
          }{" "}
          )X+({" "}
          {
            <input
              placeholder={"C"}
              value={userNoC}
              onChange={(event) => {
                setUserNoC(event.target.value);
              }}
              style={{
                width: "20px",
                height: "40px",
                textAlign: "center",
              }}
            />
          }{" "}
          )= ۰
        </h1>
        <h3>{Delta(userNoA, userNoB, userNoC)}</h3>
      </div>
    </div>
  );
}
