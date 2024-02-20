import { NavLink } from "react-router-dom";
import "../global.css";
import { Button } from "../styles/Button";
import { useContext } from "react";
import { ValueContext } from "../App";

const HeroSection = (props) => {
  const { myData } = props
  const value = useContext(ValueContext);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex' }}>
            <div className="hero-section-data">
              <p style={{ fontSize: 20 }}>{myData.first}</p>
              <h1>{myData.second}</h1>
              <p>
                {myData.fourth}
              </p>
              <NavLink>
                <Button style={{ backgroundColor: value.color }}>{myData.third}</Button>
              </NavLink>
            </div>
            <div className="hero-section-image">
              <figure top={0}>
                <img src={props.imgsrc} alt="" className="img-style" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default HeroSection;
