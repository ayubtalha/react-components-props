import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jack"
          date="06:00 am"
          text="Good! work!!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="khan"
          date="05:00 am"
          text="Good! work!!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Ali"
          date="04:00 am"
          text="Good! work!!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
