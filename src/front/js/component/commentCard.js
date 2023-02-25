import React from "react";
import format from 'date-fns/format'

const CommentCard = ({ comment }) => {
  return (
    <div className="p-1 mb-2 bg-light" style={{ width: '300px' }}>
      <div className="comment-header d-flex justify-content-between">
        <h6>{comment.user.username}</h6>
        <h6>{format(new Date(comment.created), 'MM/dd/yyyy')}</h6>
      </div>
      <div>
        {comment.content}
      </div>
    </div>
  );
};

export default CommentCard;
