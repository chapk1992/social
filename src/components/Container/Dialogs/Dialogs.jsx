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
  let dialogsElement = props.state.dialogs.map(d => {
    return <Dialog name={d.name} id={d.id} />;
  });

  let messageElements = props.state.messages.map(m => {
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
