import { nanoid } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/operations";
import { ContactsItem } from "./contactsItem";
import { selectFiltredContacts } from "redux/selectors";

export const ContactsList = ()=> {
    const dispatch = useDispatch();

    const filtredContacts = useSelector(selectFiltredContacts);
   
    const handleDelete = (id) => {
        console.log (id)
        dispatch(deleteContact(id))
    };

    return (
    <ul style = {{width: 500 }}>
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