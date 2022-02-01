import "./postImage.css";
import React from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const PostImage = ({thepost, thecaption, index, username, handleVote, identity, status, thevote}) => {
    let confirm = false;
    function decide() {
        const vote = {
            border: "3px solid blue",
            width: 179
        }
        if(status == "You have voted" && thevote == index) {
            confirm = true;
            return vote
        }else {
            confirm = false;
            return {
                width: 179,
                border: "3px solid #fff"
            }
        }
    }
    const star = {
        opacity: "1"
    }
    const noStar ={
        opacity: "0"
    }
  return (
    <figure key={index} className="figure25" onClick={() => handleVote(username, index, identity)}>
      <img
        style={ decide() }
        src={thepost}
      />
      <figcaption className="caption"><span>{thecaption}</span></figcaption>
      <figcaption style={confirm ? star : noStar } className="voted"><StarRoundedIcon className="star24" /></figcaption>
    </figure>
  );
};

export default PostImage;
