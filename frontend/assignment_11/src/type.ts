export type commentType = {
  rpid: number;
  user: userType;
  content: string;
  ctime: string;
  like: number;
};

export type userType = {
  uid: string;
  avatar: string;
  uname: string;
};

export type tab = {
  type: string;
  text: string;
};

export type propsType = {
  tabs: tab[];
  setActiveTab: (tab: string) => void;
};

export type PostCommentPropsType = {
  avatar: string;
  newComment: string;
  setNewComment: (comment: string) => void;
  postComment: () => void;
};

export type CommentListType = {
  comments: commentType[];
  user: userType;
  deleteComment: (tab: number) => void;
};
