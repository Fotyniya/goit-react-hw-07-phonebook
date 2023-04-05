import { nanoid } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { ContactsItem } from "./contactsItem";

export const ContactsList = ()=> {
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filterQuery.filter);
    //console.log(filter)

    const contacts = useSelector(state => state.contacts.items);
    //console.log(contacts)

    const filtredContacts = 
          contacts
          .filter(item => (item.contact.name).toUpperCase().includes((filter).toUpperCase()));
          console.log(filtredContacts);

    const handleDelete = (id) => {
        console.log (id)
       dispatch(deleteContact(id))
    };

    return (
    <ul>
        {filtredContacts.map(contact =>  
            <li key = {nanoid()} style={{marginBottom: 10 }}>
                <ContactsItem 
                    item = {contact} 
                    onDelete={ handleDelete } 
                />
            </li>
        )}
    </ul>
)}