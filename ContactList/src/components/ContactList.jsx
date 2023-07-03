import React, {useEffect, useState } from "react"; 
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ setSelectedContactId }) { 
    const [contact, setContact] = useState([]);
    // EMPTY dependency array below: useEffect will only run once
  
    useEffect(() => {
        async function fetchContacts() {
            try {
            // your fetch logic will go here
              const response = await fetch("http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/");
              const result = await response.json();
              setContact(result);
              //setSelectedContactId(result);//
              console.log(response);//
            } catch (error) {
              console.error(error);
            }
        }
        fetchContacts()
        }, []);
  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr id="table-row">
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
              </tr>
              {contact.map((contact) => (
                  <ContactRow key={contact.id} contact={contact} />
                ))}
          </tbody>
        </table>
    ); 
}
