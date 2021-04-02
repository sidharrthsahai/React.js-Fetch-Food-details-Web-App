import React from "react";
import { Media, Badge } from "reactstrap";
import { IconContext } from "react-icons";



const ItemStat = ({ paramname, data, iconsrc }) => {
  const badgeStyle=(data<100)?(data<50)?"success":"warning":"danger";
  return (
    <div>
      <Media>
        <Media left href="#">
          <IconContext.Provider value={{ color: "black", size: "30px" }}>
            {iconsrc}
          </IconContext.Provider>
        </Media>
        <p>&nbsp;{paramname}</p>&nbsp;:&nbsp;
        <p>
          <Badge color={badgeStyle}>{data}</Badge>
        </p>
      </Media>
    </div>
  );
};

export default ItemStat;
