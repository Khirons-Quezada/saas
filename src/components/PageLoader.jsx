import { useState, useEffect, useRef } from "react";

export default function PageLoader() {
  const [seconds, setSeconds] = useState(0);
  const timer = () => {
    setSeconds(seconds + 1);
  };
  useEffect(() => {
    const cl = setInterval(timer, 1000);
    return () => clearInterval(cl);
  }, [seconds]);

  function secondsToString(seconds) {
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10)? '0' + second : second;
    return hour + ':' + minute + ':' + second;
  }
  return (
    <>
      <div className="page-loader">
        <div className="d-flex a-i-center j-c-center flex-direction-column h-100p">
          <img
            src="/assets/images/logo_blanco.png"
            className="img-fluid"
            width="200"
            style={{ marginLeft: "3%", marginTop: "-10%" }}
          />
          <h1 style={{ marginTop: "1%" }} className="text-white">
            {secondsToString(seconds)}
          </h1>
          <div className="loader-bar">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
