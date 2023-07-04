import React, { useState } from "react";
import "./ContactBook.css";
import ContactList from "./ContactList";
import PremiumButton from "./PremiumButton";

const ContactBook = () => {
  const [contacts, setContacts] = useState([]);
  const [premium, setPremium] = useState(false);
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [editContactIndex, setEditContactIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddContact = () => {
    if (newContact.firstName && newContact.lastName && newContact.phoneNumber) {
      setContacts([...contacts, newContact]);
      setNewContact({
        firstName: "",
        lastName: "",
        phoneNumber: "",
      });
    }
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  const handleUpdateContact = (index) => {
    if (premium) {
      setEditContactIndex(index);
      setIsModalOpen(true);
    } else {
      console.log("доступно только для премиум-подписчиков!");
    }
  };

  const handleSaveContact = () => {
    const updatedContacts = [...contacts];
    updatedContacts[editContactIndex] = newContact;
    setContacts(updatedContacts);
    setIsModalOpen(false);
  };

  const handleTogglePremium = () => {
    setPremium(!premium);
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      className={`contact-book ${premium ? "premium-background" : ""} `}
    >
      <h2 className="title">Contact Book</h2>

      <h3></h3>
      <input
        className="name"
        type="text"
        name="firstName"
        placeholder="Name..."
        value={newContact.firstName}
        onChange={handleInputChange}
      />
      <input
        className="surname"
        type="text"
        name="lastName"
        placeholder="Surname..."
        value={newContact.lastName}
        onChange={handleInputChange}
      />
      <input
        className="number"
        type="text"
        name="phoneNumber"
        placeholder="Number..."
        value={newContact.phoneNumber}
        onChange={handleInputChange}
      />
      <button className="btn-1" onClick={handleAddContact}>
        Add Contact
      </button>

      <h3>Список</h3>
      <ContactList
        contacts={contacts}
        premium={premium}
        handleDeleteContact={handleDeleteContact}
        handleUpdateContact={handleUpdateContact}
      />

      <h3>Premium</h3>
      <PremiumButton
        premium={premium}
        handleTogglePremium={handleTogglePremium}
      />

      {isModalOpen && (
        <div className="modal">
          <h3>Изменить</h3>
          <input
            type="text"
            name="firstName"
            placeholder="Имя"
            value={newContact.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={newContact.lastName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Номер"
            value={newContact.phoneNumber}
            onChange={handleInputChange}
          />
          <button className="modal-btn" onClick={handleSaveContact}>
            Save
          </button>
          <button className="modal-btn" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactBook;
