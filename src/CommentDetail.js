import React from "react";
// import ReactDOM from "react-dom";

const CommentDetail = (props) => {
  return (
    <div class="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>

      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>

        <div className="metadata">
          <div className="date">{props.date}</div>{" "}
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
