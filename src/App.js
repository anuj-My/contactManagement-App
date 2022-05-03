import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
// import Route from "./components/Route";

function App() {
  const id = Date.now();
  const LOCAL_STORAGE_KEY = "contacts";

  function contactFromStorage() {
    const getStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const getContacts = getStorage ? JSON.parse(getStorage) : [];

    return getContacts;
  }

  const [contactsData, setContactsData] = useState(contactFromStorage());

  function addContactHandler(contacts) {
    setContactsData([...contactsData, { id, ...contacts }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contactsData.filter((contact) => {
      return contact.id !== id;
    });

    setContactsData(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactsData));
  }, [contactsData]);

  return (
    <div className="App ui container">
      <Header />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ContactList
                contactsData={contactsData}
                getContactsId={removeContactHandler}
              />
            }
          ></Route>
          <Route
            path="/addcontacts"
            element={<AddContact addContactHandler={addContactHandler} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
