import React from "react";
import Topic from "./Topic";

const Chapter = props => {
  const {
    childrenCount,
    id,
    sequenceNO,
    title,
    type,
    completeCount,
    chapterContent
  } = props;
  const iconClassName =
    childrenCount === completeCount ? "check_circle" : "panorama_fish_eye";
  return (
    <li id={id} type={type}>
      <div className="collapsible-header valign-wrapper">
        <i className="material-icons">{iconClassName}</i>
        <h6>{`${sequenceNO}. ${title}`}</h6>
      </div>
      <div
        className="collapsible-body align-left"
        style={{ paddingLeft: "10px" }}
      >
        <ul style={{ paddingLeft: "20px" }}>
          {chapterContent.map(topic => (
            <Topic {...topic} chapterSequenceNO={sequenceNO} />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Chapter;
