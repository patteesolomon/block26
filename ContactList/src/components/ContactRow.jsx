import React from 'react';
// tr = table row 
// th = table header
// td = table col
// thread thing goes under table
// table beginning
// tbody begins tr, td, etc

export default function ContactRow({contact, setSelectedContactId }) {
  return (
     <tr
      onClick={function () {
        console.log(contact);
        setSelectedContactId(contact.id);
      }}
    >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
    </tr>
  );
}