
import React from 'react';
import { Jumbotron } from 'reactstrap';
import styles from "../modules/Header.module.css";

const Header = (props) => {
  return (
   
     <div>
        <Jumbotron className={styles.colour}>
        <div className = "text-center">
          <h1 className="display-3">EVOCCO</h1>
          <p className="lead">Track. Improve. Offset.</p>
          <hr className="my-2" />
          <p>Take control of your food's carbon footprint. Simply enter the food contents you like to intake in your diet under the hood.</p>
          </div>
        </Jumbotron>
      </div>
   
  );
};

export default Header;