import React from "react";
import ItemScore from "./ItemScore";
import CombinedScore from "./CombinedScore";
import { ListGroup, ListGroupItem } from "reactstrap";

const ScoreDetails = ({ cScore, itemScoreList }) => {
  return (
    <div>
      <br></br>
      <br></br>      
      <br></br>

      <CombinedScore cScore={cScore} />

      <br></br>
      <br></br>      
      <br></br>
      
      <div>
        <ListGroup>
          {itemScoreList.map((x) => (
            <ListGroupItem key={x.product_name} color="success">
              <ItemScore item={x} />
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};
export default ScoreDetails;