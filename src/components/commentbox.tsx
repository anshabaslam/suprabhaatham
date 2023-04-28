import React, { useState } from "react";
import { Button } from "antd";

const CommentSection: React.FC = () => {
  const [text, setText] = useState("");
  const maxWords = 3000;

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="comment-section">
      <textarea
        className="text-input"
        value={text}
        onChange={handleInputChange}
        maxLength={maxWords}
        placeholder="Type your comment here..."
      />
      <div className="tools">
        <div className="formatting-container">
          <button className="formatting-button">B</button>
          <button className="formatting-button">I</button>
          <button className="formatting-button">U</button>
        </div>
        {/* <div className="submit-button-container">
          <Button type="primary" className="submit-button">
            Submit
          </Button>
        </div> */}
      </div>
      <div>
        <div className="words-count totalWords">
          <div ><div className="words">{maxWords - text.length}</div></div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
