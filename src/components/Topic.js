import React from "react";
import utils from "../utils";

const Topic = ({ id, sequenceNO, title, type, status, chapterSequenceNO }) => {
  const iconClassName = utils.getIconClassFromStatus(status);
  return (
    <li id={id} type={type} style={{ marginBottom: "10px" }}>
      <div className="valign-wrapper">
        <i className="material-icons">{iconClassName}</i>
        <span
          style={{ marginLeft: "10px" }}
        >{`${chapterSequenceNO}.${sequenceNO}. ${title}`}</span>
      </div>
    </li>
  );
};

export default Topic;
