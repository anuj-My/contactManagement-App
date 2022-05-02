import React from "react";
import ContactItem from "./ContactItem";
import Link from "./Link";

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
      <Link href="/contacts" className="ui button blue ">
        Add New Contact
      </Link>
      <div className="ui divided items ">{renderContactsData}</div>
    </div>
  );
}
