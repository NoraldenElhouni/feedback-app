import PropType from "prop-types";
import Feedbackitem from "./FeedbackItem";
import React from "react";

function FeedbackList({ feedback, handelDelete }) {
  if (!feedback || feedback.lenght === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <Feedbackitem key={item.id} item={item} handelDelete={handelDelete} />
      ))}
    </div>
  );
}

FeedbackList.PropType = {
  feedback: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      text: PropType.string.isRequired,
      rating: PropType.number.isRequired,
    })
  ),
};

export default FeedbackList;