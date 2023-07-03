import React from 'react';

const ContactRowC = async (
  { contact, setSelectedContactId }
) => {
  return (
      (setSelectedContactId ? (
      <>
        {
          <>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
          </>
        }
      </>
      ) : (
        <p>No Items to Select</p>
      ))
  );
}

function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact);
        ContactRowC(contact, setSelectedContactId);
      }}
    >
    </tr>
  );
}

export default ContactRow