function passwordGenerator(charsQuantity){
    if (!Number.isInteger(charsQuantity)){
        return 'Not an Integer';
    }

    if (charsQuantity < 3){
        return 'Minimum length allowed: 3'
    }

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '1234567890';
    const symbols = '~!@#$%^&*_-+=`|(){}[]:;"\'<>,.?/';

    const categories = [
        {name:'uppercase', chars: uppercase},
        {name:'lowercase', chars: lowercase},
        {name:'digits', chars: digits},
        {name:'symbols', chars: symbols}
    ];

    const randomChar = (charset) =>
        charset[Math.floor(Math.random()*charset.length)];//Check this

    const shuffle = (array) => array.sort(() => Math.random()-0.5);

    const selectedCategories = shuffle([...categories]).slice(0.3);

    let passwordChars = [];

    for (const category of selectedCategories){passwordChars.push(randomChar(category.chars));}

    const pool = selectedCategories.map(cat => cat.chars).join('');

    for(let i = passwordChars.length; i < charsQuantity; i++){
        passwordChars.push(randomChar(pool));
    }

    return shuffle(passwordChars).join('');
}

console.log(passwordGenerator(null));
console.log(passwordGenerator('abc'));
console.log(passwordGenerator(2));
console.log(passwordGenerator(16));
console.log(passwordGenerator(8));

//Random numbers of characters
//Characters are chosen at random
//At least one character is chosen
//Shuffle characters
//Loop through any missing characters