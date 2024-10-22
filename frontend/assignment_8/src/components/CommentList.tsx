import { CommentListType } from "../type";

export const CommnetList = (props: CommentListType) => {
  const { comments, user, deleteComment } = props;
  return (
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
  );
};
