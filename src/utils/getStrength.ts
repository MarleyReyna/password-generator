import $ from 'jquery';
import { strengths } from "../data/Strengths";
import { PasswordParameters } from "../lib/types";

export const getStrength = (strength: number, length: number, parameters: PasswordParameters) =>{
    let newStrength = 0;
    $('.level').css('background-color', 'transparent')
    $('.level').css('border-color', '#E6E5EA')

    if(length >= 7){
        newStrength += 1
    }

    newStrength += Object.keys(parameters).length - 1

    if (newStrength !== 0){
        newStrength -= 1
    }

    if (newStrength === strength){
        for (let i = 0; i < strength + 1; i++){
            $('.level').eq(i).css('background-color', strengths[strength].color)
            $('.level').eq(i).css('border-color', strengths[strength].color)
        }
    }

    return newStrength;
}