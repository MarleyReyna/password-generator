import { CheckboxProps } from "../../lib/types";

const Checkbox = ({value, label}: CheckboxProps) => {
    return (
        <label htmlFor={value} >
            <input type='checkbox' id={value} value={value}/>
            <span className='checkbox'>
                <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8"/></svg>
            </span>
            {label}
        </label>
    );
}
 
export default Checkbox;