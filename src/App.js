import React, { useState } from "react";
import a from "./a.jpg";
import b from "./b.jpg";
import c from "./c.png";
import d from "./d.jpg";
import "./App.css";

function App() {
  const [style, setStyle] = useState(0);

  return (
    <div className="App w3-card w3-padding">
      <div className="header w3-row  w3-padding">
        <div>
          <p className="w3-text-red w3-xlarge">Our Menu</p>
          <h1 className="w3-col l6 " style={{ marginTop: "-20px" }}>
            Menu That always<br></br> makes you fell in love
          </h1>
          <div className="buttons ">
            <div
              className="button "
              onClick={() => {
                if (style == 0) {
                  setStyle(0);
                }
                if (style < 0) {
                  setStyle(style + 250);
                }
              }}
            >
              <p>&lt;</p>
            </div>
            <div
              className="button"
              onClick={() => {
                if (style >= -700) {
                  setStyle(style - 250);
                }
              }}
            >
              <p>&gt;</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main w3-row w3-card">
        <div>
          <div className="w3-half left">
            <div className="list">
              <li>
                <span>Burger</span>
              </li>
              <li>
                <span>Pizza</span>
              </li>
              <li>
                <span>Icecream</span>
              </li>
              <li>
                <span>Cupcake</span>
              </li>
            </div>
          </div>
          <div className="w3-row w3-margin w3-padding w3-rest carasoul">
            <div
              className="w3-col w3-display-container w3-card "
              style={{ marginLeft: style }}
            >
              <img src={a} alt="" />
              <div className="w3-display-bottomleft w3-margin">
                <h3 className="w3-text-black">Italian Pizza</h3>
                <p>
                  $<strong>7.95</strong>
                </p>
                <h5>Order Now &gt;</h5>
              </div>
            </div>
            <div className="w3-col w3-display-container w3-card">
              <img src={b} alt="" />
              <div className="w3-display-bottomleft w3-margin">
                <h3 className="w3-text-black">Italian Pizza</h3>
                <p>
                  $<strong>7.95</strong>
                </p>
                <h5>Order Now &gt;</h5>
              </div>
            </div>
            <div className="w3-col w3-display-container w3-card">
              <img src={c} alt="" />
              <div className="w3-display-bottomleft w3-margin">
                <h3 className="w3-text-black">Italian Pizza</h3>
                <p>
                  $<strong>7.95</strong>
                </p>
                <h5>Order Now &gt;</h5>
              </div>
            </div>
            <div className="w3-col w3-display-container w3-card">
              <img src={d} alt="" />
              <div className="w3-display-bottomleft w3-margin">
                <h3 className="w3-text-black">Italian Pizza</h3>
                <p>
                  $<strong>7.95</strong>
                </p>
                <h5>Order Now &gt;</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
