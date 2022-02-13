import React, { useState} from "react";
import "./ageButton.css"
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export const AgeButton = ({item, selectAge}) => {
    // const [click, setClick] = useState(false);
    // const setAge = () => {
    //     setClick(!click)
    // }

  return (
    <div className={item.selected? "age-btn active-age-btn" : "age-btn"}
    onClick={() => selectAge(item.id)}
    >
      <StarRoundedIcon className={item.selected? "star-icon visible" : "star-icon"}/>
      <div className="age-value">
          {item.age}
      </div>
    </div>
  );
};
