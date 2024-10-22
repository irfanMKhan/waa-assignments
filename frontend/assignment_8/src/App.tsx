import "./App.scss";

import { useEffect, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { commentType } from "./type";
import { user, tabs, avatar } from "./sample";
import NavigationItems from "./components/NavigationItems";
import { PostComment } from "./components/PostComment";
import { CommnetList } from "./components/CommentList";

const App = () => {
  const [comments, setComments] = useState<commentType[]>([]);
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch("http://localhost:3004/comments");
        const data = await res.json();
        setComments(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (loading) {
    return <div>Loading comments...</div>;
  }

  return (
    <div className="app">
      {/* Nav Tab */}
      <NavigationItems
        tabs={tabs}
        setActiveTab={setActiveTab}
      ></NavigationItems>

      <div className="reply-wrap">
        {/* comments */}
        <PostComment
          avatar={avatar}
          newComment={newComment}
          setNewComment={setNewComment}
          postComment={postComment}
        ></PostComment>

        {/* comment list */}

        <CommnetList
          comments={comments}
          user={user}
          deleteComment={deleteComment}
        ></CommnetList>
      </div>
    </div>
  );
};

export default App;
