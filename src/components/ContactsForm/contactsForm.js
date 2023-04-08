import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "redux/operations";
import { Button, FormContainer, FormLabel, Input } from "./contactsForm.styled"

export const ContactsForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({name, number}));
    setName('');
    setNumber(0);
  };
  
  return (
    <FormContainer>
      <form onSubmit={handleSubmit} >
        <FormLabel>
          Name
          <Input 
            type="text" 
            name='name' 
            value={name} 
            onChange = { handleChangeName }
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
        </FormLabel>
        <FormLabel>
            Number
            <Input 
              type="tel" 
              name='number' 
              value={number} 
              onChange = { handleChangeNumber }
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required/>
        </FormLabel>
        <Button type="submit" >Add contact</Button>
      </form>
    </FormContainer>
  );
}