import { PostCommentPropsType } from "../type";

export const PostComment = (props: PostCommentPropsType) => {
  const { avatar, newComment, setNewComment, postComment } = props;
  return (
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
  );
};
