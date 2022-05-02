import React from "react";
import avatar from "../assets/avatar.png";
export default function ContactItem({ contact, clickHandler }) {
  return (
    <div className="item">
      <div className="ui tiny image">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="middle aligned content">
        <div className="ui header">{contact.name}</div>
        <div>{contact.email}</div>
      </div>

      <i
        style={{ color: "red", marginTop: "12px", cursor: "pointer" }}
        className="trash alternate outline icon big"
        onClick={() => clickHandler(contact.id)}
      ></i>
    </div>
  );
}
