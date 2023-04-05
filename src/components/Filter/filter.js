import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { FilterInput } from "./FilterStyled"

export const Filter = ()=> {
    const dispatch = useDispatch(); 
   
    const handleFilterChange = e => {
        dispatch(setFilter(e.currentTarget.value));
    };

    return (
    <form >
        <label><h3>Find contact by name</h3>
            <FilterInput type="text" onChange={ handleFilterChange }/>
        </label>
    </form> 
    );
};