import { FaTimes } from "react-icons/fa";
import PropType from "prop-types";
import Card from "./shared/Card";
import React from "react";

function FeedbackItem({ item, handelDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handelDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.prototype = {
  item: PropType.object.isRequired,
};

export default FeedbackItem;
