interface Pass {
    'upper': string[];
    'lower': string[];
    'numbers': string[];
    'symbols': string[];
}

const Passwords: Pass = {
    'upper': ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    'lower': ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    'numbers': ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    'symbols': ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
}

const Strengths = [
    {msg: 'Too Weak!',
    color: '#F64A4A'},
    {msg: 'Weak',
    color: '#FB7C58'},
    {msg: 'Medium',
    color: '#F8CD65'},
    {msg: 'Strong',
    color: '#A4FFAF'}
]

export {Passwords, Strengths};
