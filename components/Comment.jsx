import React from "react";
import Reply from "./Reply";

export default function Comment(props) {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={props.userpic}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {props.username}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>{props.usercontext}</span>
          <div className="d-flex align-items-center gap-1">
            {props.userlike > 0 ? <img src="/like.svg" width={20}></img> : null}
            <span style={{ color: "#B0B3B8" }}>
              {props.userlike > 0 ? <span>{props.userlike} คน</span> : null}
            </span>
          </div>
        </div>
      </div>
      {props.userreply.map((replysec, i) => (
        <Reply
          key={i}
          username={replysec.username}
          userpic={replysec.userImagePath}
          usercontext={replysec.replyText}
          userlike={replysec.likeNum}
        />
      ))}
    </div>
  );
}
