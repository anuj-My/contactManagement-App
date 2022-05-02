import React, { useState } from "react";
import Link from "./Link";

export default function AddContact({ addContactHandler }) {
  const [contacts, setContacts] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setContacts((prevContacts) => {
      return {
        ...prevContacts,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (contacts.name === "" || contacts.email === "")
      return alert("All fields are mandatory");

    addContactHandler(contacts);

    setContacts((prevContacts) => {
      return {
        ...prevContacts,
        name: "",
        email: "",
      };
    });
  }

  return (
    <div className="ui segment">
      <h1 className="ui header">Add Contact</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="input"
            name="name"
            placeholder="Name"
            value={contacts.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="input"
            name="email"
            placeholder="Email"
            value={contacts.email}
            onChange={handleChange}
          />
        </div>

        <button className="ui button blue">Add</button>
        <Link href="/list" className="ui button blue">
          Show Contact List
        </Link>
      </form>
    </div>
  );
}
