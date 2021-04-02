import React from "react";
import styles from "../modules/ItemScore.module.css";
import {  Row, Col } from "reactstrap";
import { BiBarChartAlt } from "react-icons/bi";
import { WiCloudyGusts } from "react-icons/wi";
import { MdStars } from "react-icons/md";
import ItemStat from "./ItemStat";

const ItemScore = ({ item }) => {
  var item_name_caps = item.product_name.toUpperCase();

  return (
    <div>
      <div className="my-2 rounded">
        <div className="mshow" role="alert">
          <div className={styles.headerStyle}>
            <strong className={styles.headerTitle}>{item_name_caps}</strong>
          </div>
          <div className={styles.itemBody}>
            <Row>              
              <Col>
                <ItemStat paramname="Star Rating" data={item["Star Rating"]} iconsrc={<MdStars/>}></ItemStat>
              </Col>
              <Col>
                <ItemStat paramname="CO2 Impact" data={item.co2_impact} iconsrc={<WiCloudyGusts/>}></ItemStat>
              </Col>
              <Col>
                <ItemStat paramname="Food Unit" data={item.food_unit} iconsrc={<BiBarChartAlt/>}></ItemStat>
              </Col>
              <Col>
                <ItemStat paramname="Score" data={item.score} iconsrc={<BiBarChartAlt/>}></ItemStat>
              </Col> 
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemScore;
