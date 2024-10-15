
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

      <div className="reply-navigation">
        <ul className="nav-bar">
          {tabs.map((tab) => (
            <li className="nav-title" key={tab.type}>
              <span
                className={`nav-item ${activeTab === tab.type ? "active" : ""}`}
                onClick={() => setActiveTab(tab.type)}
              >
                {tab.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment..."
      />
      <button onClick={postComment}>Post</button>

      {/* Map over the comments array and display them */}
      {comments.map((comment) => (
        <div key={comment.rpid} className="reply-item">
          <div className="user-name">{comment.user.uname}</div>
          <div className="reply-content">{comment.content}</div>
          <div className="reply-info">
            <span className="reply-time">{comment.ctime}</span>
            <span className="reply-like">Likes: {comment.like}</span>
            {comment.user.uid === user.uid && (
              <button onClick={() => deleteComment(comment.rpid)}>
                Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
