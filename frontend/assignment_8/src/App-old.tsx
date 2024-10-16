import "./App.scss";
import avatar from "./images/bozai.png";

import { useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const defaultList = [
  {
    rpid: 3,
    user: { uid: "13258165", avatar: "", uname: "Jay Zhou" },

    content: "Nice, well done",

    ctime: "10-18 08:15",
    like: 88,
  },
  {
    rpid: 2,
    user: { uid: "36080105", avatar: "", uname: "Song Xu" },
    content: "I search for you thousands of times, from dawn till dusk.",
    ctime: "11-13 11:29",
    like: 88,
  },
  {
    rpid: 1,
    user: { uid: "30009257", avatar, uname: "John" },
    content:
      "I told my computer I needed a break... now it will not stop sending me vacation ads.",
    ctime: "10-19 09:00",
    like: 66,
  },
];

const user = {
  uid: "30009257",
  avatar,
  uname: "John",
};

const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

const App = () => {
  const [comments, setComments] = useState(defaultList);
  const [newComment, setNewComment] = useState("");

  const [activeTab, setActiveTab] = useState("hot");

  const deleteComment = (rpid: number) => {
    setComments(comments.filter((comment) => comment.rpid !== rpid));
  };

  const postComment = () => {
    const newCommentItem = {
      rpid: parseInt(uuidv4()),
      user: user,
      content: newComment,
      ctime: dayjs().format("MM-DD HH:mm"),
      like: 0,
    };

    setComments([...comments, newCommentItem]);
    setNewComment("");
  };

  const sortedComments =
    activeTab === "hot"
      ? _.orderBy(comments, ["like"], ["desc"])
      : _.orderBy(comments, ["ctime"], ["desc"]);

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            <span className="nav-item">Top</span>
            <span className="nav-item">Newest</span>
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send">
              <div className="send-text">post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {/* comment item */}
          <div className="reply-item">
            {/* profile */}
            <div className="root-reply-avatar">
              <div className="bili-avatar">
                <img className="bili-avatar-img" alt="" />
              </div>
            </div>

            <div className="content-wrap">
              {/* username */}
              <div className="user-info">
                <div className="user-name">jack</div>
              </div>
              {/* comment content */}
              <div className="root-reply">
                <span className="reply-content">This is reply</span>
                <div className="reply-info">
                  {/* comment created time */}
                  <span className="reply-time">{"2023-11-11"}</span>
                  {/* total likes */}
                  <span className="reply-time">Like:{100}</span>
                  <span className="delete-btn">Delete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
