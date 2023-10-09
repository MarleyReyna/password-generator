import $ from 'jquery';
import {type PasswordParameters, type Values} from '../lib/types'
import { passwordsCharacters } from '../data/PasswordCharacters';

export const getParameters = () => {
    const values: Values = {};
    const inputs = $('#password-props :input')
    const helper = ['upper', 'lower', 'numbers', 'symbols']

    let parameters: PasswordParameters = {}
    for(let i = 0; i < 4; i++){
        const input = inputs[i+1] as HTMLInputElement;
        const key = helper[i] as keyof typeof passwordsCharacters
        
        values[input.value] = input.checked;
        if(values[key] === true){
            parameters[key as keyof typeof passwordsCharacters] = passwordsCharacters[key]
        }
    }

    return parameters;
}