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
        charset(Math.floor(Math.random()*charset.length));//Check this
}
//Random numbers of characters
//Characters are chosen at random
//At least one character is chosen
//Shuffle characters
//Loop through any missing characters