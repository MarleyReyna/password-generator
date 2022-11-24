import './Main.scss'
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import {Passwords, Strengths} from '../../Passwords';

const Main = () => {
    const [length, setLength] = useState(($('#characters').val()));
    const [password, setPassword] = useState('PTx1f5DaFX');
    const [strength, setStrength] = useState(2);

    function getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    const checkStrength = (parameters: object): void =>{
        let newStrength = 0;
        $('.level').css('background-color', 'transparent')
        $('.level').css('border-color', '#E6E5EA')

        if(Number(length) >= 7){
            newStrength += 1
        }

        newStrength += Object.keys(parameters).length - 1

        if (newStrength !== 0){
            newStrength -= 1
        }

        if (newStrength === strength){
            for (let i = 0; i < strength + 1; i++){
                $('.level').eq(i).css('background-color', Strengths[strength].color)
                $('.level').eq(i).css('border-color', Strengths[strength].color)
            }
        }

        setStrength((c) => c = newStrength)
    }

    const copyPassword = (e: React.FormEvent): void =>{
        e.preventDefault()
        const textCopy = $('#password').val() as string;
        navigator.clipboard.writeText(textCopy);
    }

    const createPassword = (parameters: object): void =>{
        let passypass = ''
        if(Object.keys(parameters).length === 0) return;
        
        for(let i=0; i < Number(length); i++){
            let parameter = getRandomInt(Object.keys(parameters).length)
            let key: any = Object.values(parameters)[parameter];
            passypass += key[getRandomInt(key.length)]
        }

        checkStrength(parameters)
        setPassword(c => c = passypass)
    }

    const handleChecked = (e: React.FormEvent): void =>{
        e.preventDefault();
        const $inputs = $('#password-props :input')
        const helper = ['upper', 'lower', 'numbers', 'symbols']

        let values:any = {};
        for(let i = 1; i < 5; i++){
            const input = $inputs[i] as HTMLInputElement;
            values[input.value] = input.checked;
        }

        let parameters: any = {}
        for(let i = 0; i < 4; i++){
            let key = helper[i] as keyof typeof Passwords
            if(values[key] === true){
               parameters[key] = Passwords[key]
            }
        }

        createPassword(parameters)
    }

    useEffect(() =>{
        setLength(($('#characters').val()))
    })

    useEffect(() =>{
        for (let i = 0; i < strength + 1; i++){
            $('.level').eq(i).css('background-color', Strengths[strength].color)
            $('.level').eq(i).css('border-color', Strengths[strength].color)
        }
    }, [strength])

    useEffect(() =>{
        let value = ((Number(length))/(20)*100);
        if(length === 0){
            value = 0
        }
        $('#characters').css('background', 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #000 ' + value + '%, black 100%)')
    }, [length])

    return (
        <main>
            <form className='password'>
                <label className='sr-only'> Generated Password</label>
                <input placeholder='P4$5W0rD!' id='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                <button onClick={copyPassword}>
                    <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" fill="currentColor"/>
                    </svg>
                </button>
            </form>

            <section>
                <form className='password-properties' id='password-props' onSubmit={(event) => handleChecked(event)}>
                    <div className='pass-length'>
                        <label>Character Length</label>
                        <p>{length}</p>
                        {/* <div className='progress'/> */}
                        <input type='range' id='characters' 
                        defaultValue={10} name='characters' 
                        min='1' max='20' 
                        onChange={() => setLength(($('#characters').val()))}
                        />
                    </div>
                    <label htmlFor="uppercase" >
                        <input type='checkbox' id='uppercase' name='Uppercase' value='upper'/>
                        <span className='checkbox'>
                            <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8"/></svg>
                        </span>
                        Include Uppercase Letters
                    </label>
                    <label htmlFor="lowercase" >
                        <input type='checkbox' id='lowercase' value='lower'/>
                        <span className='checkbox'>
                            <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8"/></svg>
                        </span>
                        Include Lowercase Letters
                    </label>
                    <label htmlFor="numbers" >
                        <input type='checkbox' id='numbers' value='numbers'/>
                        <span className='checkbox'>
                            <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8"/></svg>
                        </span>
                        Include Numbers
                    </label>
                    <label htmlFor="symbols" >
                        <input type='checkbox' id='symbols' value='symbols'/>
                        <span className='checkbox'>
                            <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8"/></svg>
                        </span>
                        Include Symbols
                    </label>
                </form>

                <div className='strength-indicator'>
                    <p>Strength</p>
                    <div className='strength'>
                        <p>{Strengths[strength].msg}</p>
                        <div className='level'/>
                        <div className='level'/>
                        <div className='level'/>
                        <div className='level'/>
                    </div>
                </div>
                <button type='submit' onClick={handleChecked}>
                    Generate
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/>
                    </svg>
                </button>
            </section>
        </main>
    );
}
 
export default Main;