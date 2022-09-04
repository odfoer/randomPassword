const characters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '~',
    '`',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
    '{',
    '[',
    '}',
    ']',
    ',',
    '|',
    ':',
    ';',
    '<',
    '>',
    '.',
    '?',
    '/',
]

let passOne = document.getElementById('pass-one')
let passTwo = document.getElementById('pass-two')
let generatePass = document.getElementById('generate-pass')

let passWord1 = []
let passWord2 = []

function generatePassword() {
    for (let i = 0; i < 15; i++) {
        let genPass = Math.floor(Math.random() * characters.length)

        passWord1.push(characters[genPass])
    }
    for (let i = 0; i < 15; i++) {
        let genPass = Math.floor(Math.random() * characters.length)

        passWord2.push(characters[genPass])
    }
}

generatePass.addEventListener('click', function () {
    generatePassword()

    passOne.value = passWord1.join('')
    passTwo.value = passWord2.join('')

    passWord1 = []
    passWord2 = []
})
