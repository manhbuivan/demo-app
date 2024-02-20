import { useContext } from "react";
import { ValueContext } from "../App";

const Footer = () => {
   const value = useContext(ValueContext)
  console.log(value.color)
  return (
    <div style={{background: `${value.color}`}}>
      <footer style={{padding: "0 0 0 50px"}}>
        <div style={{display: 'flex'}}>
          <div>
            <h3>Osama Shop</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam provident mollitia.
            </p>
          </div>
          <div className="footer-about">
            <h3>Categories</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam provident mollitia.
            </p>
          </div>
          <div className="footer-about">
            <h3>Informations</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam provident mollitia.
            </p>
          </div>
          <div className="footer-social">
            <h3>Connect with Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam provident mollitia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
