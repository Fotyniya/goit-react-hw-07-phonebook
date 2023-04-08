import PropTypes from 'prop-types';
import { SlClose } from "react-icons/sl";

export const ContactsItem = ({item, onDelete})=> {

    return (
        <div style={{display: "flex", justifyContent: "space-between", backgroundColor: "#E5E5E5"}}>
            <span>{item.name}: {item.phone}</span>
            <button 
                type="button" 
                onClick = {()=>onDelete(item.id)}
                style={{borderColor: "transparent", backgroundColor: "transparent", cursor: "pointer" }}
            ><SlClose size={24}/></button>
        </div>     
)};

ContactsItem.propTypes = {
    onDelete: PropTypes.func.isRequired,
    item: PropTypes.shape().isRequired,
}