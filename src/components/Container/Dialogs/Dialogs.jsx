import React from "react";
import con from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = props => {
  return (
    <div className={con.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={con.active}>
        {props.name}
      </NavLink>
    </div>
  );
};
const Message = props => {
  return <div className={con.message}>{props.message}</div>;
};

const Dialogs = props => {
  let dialogs = [
    { name: "Yaroslav", id: "1" },
    { name: "Misha", id: "2" },
    { name: "Roman", id: "3" },
    { name: "Lera", id: "4" },
    { name: "Anastasia", id: "5" }
  ];

  let messages = [
    { id: "1", message: "Hi.How are you?" },
    { id: "2", message: "I am fine.Thank you!" },
    { id: "3", message: "I like React" }
  ];

  let dialogsElement = dialogs.map(d => {
    return <Dialog name={d.name} id={d.id} />;
  });

  let messageElements = messages.map(m => {
    return <Message message={m.message} id={m.id} />;
  });
  return (
    <div className={con.dialogs}>
      <div className={con.people}>{dialogsElement}</div>
      <div className={con.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
