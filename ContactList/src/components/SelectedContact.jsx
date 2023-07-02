import React, { useEffect, useState } from 'react';

const SelectedContact = async (
  { selectedContactId, setSelectedContactId }
) => {
  useState[contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchSelection() {
      try {
        const response = fetch(`http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/usersLinks/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
      }   
      catch (error) {
        console.error(error);
      }
    }
    fetchSelection();
  }, []);
  console.log("Contact: ", contact);

  setSelectedContactId(contact);
  return (
      <>
      <div>
        SelectedContact View : 
        {
          SelectedContact ? (
            <>
              <h2>{contact.name}</h2>
              <h3>{contact.email}</h3>
              <h3>{contact.phone}</h3>
            </>
          ) : (
              <h2>No contact selected</h2>
          )
        }
        </div>
      </>
  )
}

export default SelectedContact