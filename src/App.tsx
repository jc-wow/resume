import React, { useState } from "react";
import { MainPage } from "./Components/Main/Main";
import "./App.scss";

const App = (): JSX.Element => {
  const [hasClick, setHasClick] = useState<boolean>(false);
  const clickTry = (down: boolean): void => {
    if (down) {
      setHasClick(true);
    } else {
      setHasClick(false);
    }
  };
  const scrollToResume = (): void => {
    window.scrollBy(0, window.innerHeight + 3);
  };

  return (
    <div className="App">
      <div className="main-page no-print">
        <section>
          <div className="main-title">run简历</div>
          <div className="second-title">
            <span className="desc">一款简单，安全，无需登录的简历生成器</span>
            <div
              className="explore-logo"
              onMouseOver={() => clickTry(true)}
              onMouseLeave={() => clickTry(false)}
              onClick={() => scrollToResume()}
            >
              <div className="explore-line-wrap">
                <div className="explore-line"></div>
                <div className="explore-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8.207" height="15.414" viewBox="0 0 8.207 15.414">
                    <path
                      id="Tracé_23"
                      data-name="Tracé 23"
                      d="M13,5l7,7-7,7"
                      transform="translate(-12.293 -4.293)"
                      fill="none"
                      stroke="#000"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="explore-text-wrap">
                <div className="expore-text">试一试</div>
                <div className={`underline ${hasClick ? "active" : "inactive"}`}></div>
              </div>
            </div>
            {/* <label
              className={`${hasClick ? "active" : "inactive"}`}
              onMouseDown={() => clickTry(true)}
              onMouseUp={() => clickTry(false)}
              onClick={() => scrollToResume()}
            >
              试一试
            </label> */}
          </div>
        </section>
      </div>
      <MainPage></MainPage>
    </div>
  );
};

export default App;
