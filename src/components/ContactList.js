import React from "react";
import ContactItem from "./ContactItem";
import { NavLink } from "react-router-dom";

export default function ContactList({ contactsData, getContactsId }) {
  const deleteContactHandler = (id) => {
    getContactsId(id);
  };
  const renderContactsData = contactsData.map((contact) => {
    return (
      <ContactItem
        key={contact.id}
        contact={contact}
        clickHandler={deleteContactHandler}
      />
    );
  });
  return (
    <div className="ui segment">
      <NavLink to="/addcontacts" className="ui button blue ">
        Add New Contact
      </NavLink>
      <div className="ui divided items ">{renderContactsData}</div>
    </div>
  );
}
