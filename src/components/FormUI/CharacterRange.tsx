import { useEffect } from 'react';
import $ from 'jquery';
import { type CharacterRangeProps } from '../../lib/types';

const CharacterRange = ({length, setLength}: CharacterRangeProps) => {
    useEffect(() =>{
        let value = ((Number(length))/(20)*100);
        if(length === 0){
            value = 0
        }
        $('#characters').css('background', 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #000 ' + value + '%, black 100%)')
    }, [length])

    return (
        <div className='pass-length'>
            <label>Character Length</label>
            <p>{length}</p>
            <input type='range' id='characters' 
            defaultValue={10} name='characters' 
            min='1' max='20' 
            onChange={() => setLength(($('#characters').val()) as number)}
            />
        </div>
    );
}
 
export default CharacterRange;