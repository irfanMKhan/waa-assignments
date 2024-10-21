import "./App.scss";
import avatar from "./images/bozai.png";

import { useEffect, useState } from "react";
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
      ctime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      like: 0,
    };

    setComments([...comments, newCommentItem]);
    setNewComment("");
  };

  useEffect(() => {
    sortedComments();
  }, [activeTab]);

  const sortedComments = () =>
    activeTab === "hot"
      ? setComments([..._.orderBy(comments, ["like"], ["desc"])])
      : setComments([..._.orderBy(comments, ["ctime"], ["desc"])]);

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
            {tabs.map((tab) => (
              <span
                className="nav-item"
                key={tab.type}
                onClick={() => setActiveTab(tab.type)}
              >
                {tab.text}
              </span>
            ))}
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
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send" onClick={postComment}>
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
                <img className="bili-avatar-img" alt="" src={user.avatar} />
              </div>
            </div>

            {comments.map((comment) => (
              <div className="content-wrap">
                <div className="user-info">
                  <div className="user-name">{user.uname}</div>
                </div>
                <div className="root-reply">
                  <span className="reply-content">{comment.content}</span>
                  <div className="reply-info">
                    {/* comment created time */}
                    <span className="reply-time">{comment.ctime}</span>
                    {/* total likes */}
                    <span className="reply-time">Like:{comment.like}</span>
                    <span
                      className="delete-btn"
                      onClick={() => deleteComment(comment.rpid)}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
