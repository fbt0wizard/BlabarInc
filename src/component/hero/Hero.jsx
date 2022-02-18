import "./hero.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PostImage from "../postImage/PostImage";
import * as uuid from "uuid";
import { UserHeader } from "../user-header/UserHeader";

const Hero = ({ datas, handleVote }) => {
  function poster(thepost, thecaption, username, id) {
    let myEl = [];
    for (var i = 0; i < thepost.length; i++) {
      myEl.push(
        <PostImage
          index={i + id}
          thepost={thepost[i]}
          thecaption={thecaption[i]}
          handleVote={handleVote}
          username={username}
          identity={id}
          status={datas[id].vote}
          thevote={datas[id].choice}
          key={uuid.v4()}
        />
      );
    }
    return myEl;
  }
  const props = useSpring({
    to: {
      opacity: 1,
      marginTop: "0rem",
    },
    from: {
      opacity: 0,
      marginTop: "10rem",
    },
    delay: 400,
  });
  if (datas.length !== undefined) {
    return (
      <animated.div style={props}>
        <div className="hero-section">
          {datas.map((item, i) => (
            <div className="mapped" key={i}>
              <UserHeader
                profile={item.profileImg}
                name={item.name}
                username={item.username}
                badge={item.badge}
              />
              <div className="post-set">
                <h2 className="drag">{item.drag}</h2>
                <div className="images">
                  {poster(item.post, item.post_caption, item.username, item.id)}
                </div>
              </div>
              <div className="vote">
                <span
                  className="vote-btn"
                  style={
                    item.vote == "You have voted"
                      ? { background: "green" }
                      : null
                  }
                >
                  <StarRoundedIcon className="icon25b" /> {item.vote}
                </span>
                <span className="vote-count">
                  <GroupsIcon className="icon25c" /> {item.voters}
                </span>
                <Link className="link25" to="">
                  {item.channel}
                </Link>
              </div>
              <div className="comments-section">
                <div className="comment-counts">
                  <p className="p25">comments</p>
                  <span className="span25b">
                    <ChatOutlinedIcon className="icon25e" /> {item.comments}
                  </span>
                </div>
                <div className="comment-content">
                  <img className="img25b" src={item.commenter} />
                  <span className="span25f">{item.by_user}</span>
                  <span className="span25e">{item.comment_content}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </animated.div>
    );
  } else {
    return <h3>Please wait loading..............</h3>;
  }
};

export default Hero;
