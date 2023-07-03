import React, { useState, useEffect } from "react";

const SelectedContact = ({ contactId, setSelectdContactId }) => {
  const [contact, setContact] = useState(null);
  
  return (
    (setSelectdContactId ?
      <>No Contact Selected</>
      : async function Z() {
        useEffect(async () => {
          try {
            setContact = await fetch("http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}");
            contact(setContact);
            console.log(contactId);
          }
          catch (err) {
            console.log(err);
          }
          Z();
        }, []);
        return (
          <table>
            <thread>
              <tr>
                <th colSpan="3">
                  Contact Selected
                </th>
              </tr>
            </thread>
            <tbody>
              <tr id="table-row">
                <td>
                  Name
                </td>
                <td>
                  Email
                </td>
                <td>
                  Phone
                </td>
              </tr>
              {contact.map((contact) => (
                  <ContactRow key={contact.id} contact={contact} />
                ))}
            </tbody>
          </table>
       );
      })
  );
}

export default SelectedContact