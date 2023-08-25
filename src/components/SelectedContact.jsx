import React from 'react';
import { useEffect } from 'react';
import { useState } from "react"; 

export default function SelectedContact({selectedContactId}) {
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const result = await response.json();
            setSelectedContact(result)
        } catch (error) {
            console.error(error);
        }
    }

    if (selectedContactId) {
        fetchSelectedContact();
    }
  }, [selectedContactId])

  if (!selectedContact) {
    return <div>Loading...</div>
  }

  return (
    <div>
        <h2>Contact Details</h2>
        <p>Name: {selectedContact.name}</p>
        <p>Email: {selectedContact.email}</p>
        <p>Phone: {selectedContact.phone}</p>
    </div>
  )
}