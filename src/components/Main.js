import { Button } from "reactstrap";
import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import axios from "axios";
import ErrorDisplay from "./ErrorDisplay";
import "react-toastify/dist/ReactToastify.css";
import ScoreDetails from "./ScoreDetails";

const Main = () => {
  const [items, setItems] = useState("");
  const [cScoreData, setcScoreData] = useState(null);
  const [itemScoreList, setItemScoreList] = useState([]);
  const [msg, setMsg] = useState("");
  const [showData, setShowData] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleClick(event) {

    if (items) {
      setShowData(false);
      setShowError(false);

      var products = items.split(",");
      products = products.map((x) => {
        return x.trim();
      });
      console.log("Final -" + JSON.stringify(products));
    }

    var param = {
      api_key: "sEoXmuCfZiyVUXF1_rQjJ_7EFFs",
      products: products,
    };

    postDataToServer(param);
  }

  function handleClear(event) {
    setItemScoreList([]);
    setcScoreData("");
    setShowData(false);
    setShowError(false);
    setItems("");
  }

  //creating function to get data from  api
  const postDataToServer = (data) => {
    axios.post("https://beta-api.evocco.com/basket-score", data, {
      headers: {
        'content-type': 'text/json'}
      }).then(
      (response) => {
        console.log('Response -'+JSON.stringify(response));
        
        var data = response.data;
        var hasBasketData=(Object.prototype.hasOwnProperty.call(data, "basket_breakdown") && data.basket_breakdown.length > 0)?true:false;
        if (hasBasketData) {
          var tempArr = [];
          tempArr = data.basket_breakdown.map((x) => {
            return x;
          });          
          

          var temp = {};
          for (var prop in data) {
            if (
              Object.prototype.hasOwnProperty.call(data, prop) &&
              prop !== "basket_breakdown"
            ) {
              temp[prop] = data[prop];
            }
          }
          if (tempArr.length === 0) {
            setMsg("No result found! Please refresh & try again.");
            setShowError(true);
          } else {
          setItemScoreList(tempArr);
          setcScoreData(temp);
          setShowData(true);
          }
        }
        else
        {
          setMsg("No results found. Please try again.");
          setShowError(true);
        }
      },
      (error) => {
        console.log("Error -"+JSON.stringify(error));
        setMsg(error.message + "! Please refresh and try again.");
        setShowError(true);
      }
    );
  };

  return (
    <div className="text-center">
      <InputGroup>
        <InputGroupAddon addonType="prepend" />
        <Input
          type="text"
          value={items}
          placeholder="Enter items here seperated by comma.."
          onChange={(e) => setItems(e.target.value)}
        />
      </InputGroup>
      <br></br>

      <Button color="success ml-3" size="lg" onClick={handleClick}>
        Get Basket Score
      </Button>
      <Button type = "reset" color="warning ml-3" size="lg" onClick={handleClear}>
        Clear
      </Button>

      {showData ? <div><ScoreDetails cScore={cScoreData} itemScoreList={itemScoreList}/></div> : null}
      {showError ? <div><ErrorDisplay msg={msg}/></div> : null}
    </div>
  );
};

export default Main;
