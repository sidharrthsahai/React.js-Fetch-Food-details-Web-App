import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Container, Row, Col, Media } from 'reactstrap';
import image from '../images/fruits.png'
import styles from "../modules/CombinedScore.module.css";

const CombinedScore = ({ cScore }) => {

 

  return (


   
    <div className={styles.backColor}>
      <Container className = "p-3 my-2 rounded">
        <Row>
          <Col>
             <ListGroup>
               <h6>
               <ListGroupItem className={styles.colour}><h6><b>COMBINED BASKET SCORE</b></h6></ListGroupItem>
               <ListGroupItem color="success">Cost of Offsetting = {cScore["cost_of_offsetting"]}</ListGroupItem>
               <ListGroupItem color="info">Number of Identified Items = {cScore.num_identified_items}</ListGroupItem>
               <ListGroupItem color="warning">Overall CO2 Impact = {cScore.overall_co2_impact} </ListGroupItem>
               <ListGroupItem color="danger">Overall Food Unit = {cScore.overall_food_unit}</ListGroupItem>
               <ListGroupItem color="primary">Overall Score = {cScore.overall_score}</ListGroupItem>
               <ListGroupItem color="secondary">Overall Star Rating = {cScore.overall_star_rating}</ListGroupItem>
               </h6>
              </ListGroup>
          </Col>
           
          <Col>
             <Media>
                <Media left href="#">
                 <Media object src={image} alt="Generic placeholder image" />
                </Media>      
             </Media>
          </Col>
        </Row>
          
        
      </Container>

      
      
    </div>
  
  );
};
export default CombinedScore;
