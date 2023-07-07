import React, { useState, useEffect } from "react";
import ContactRow from './ContactRow.jsx';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState([]);
    useEffect(() => {
        async function getter() {
            const response = await fetch(`http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const result = await response.json();
            setContact(result);
        }
        getter();
    }, []);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Contact Id</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                    <ContactRow
                        contact={contact} setSelectedContactId={setSelectedContactId} />
                </tbody>
            </table>
        </>
    )
};

export default SelectedContact