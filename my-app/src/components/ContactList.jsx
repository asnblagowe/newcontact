import React from "react";

const ContactList = ({
  contacts,
  premium,
  handleDeleteContact,
  handleUpdateContact,
}) => {
  return (
    <>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} className="contact-item">
              <div>
                <span className="contact-name">
                  {contact.firstName} {contact.lastName}
                </span>
                <span className="contact-phone">{contact.phoneNumber}</span>
              </div>
              {premium && (
                <button
                  className="contact-btn contact-btn-update"
                  onClick={() => handleUpdateContact(index)}
                >
                  Update
                </button>
              )}
              <button
                className="contact-btn contact-btn-delete"
                onClick={() => handleDeleteContact(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Пока что пусто</p>
      )}
    </>
  );
};

export default ContactList;
