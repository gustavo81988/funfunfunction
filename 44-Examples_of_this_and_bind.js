let talk = function(){
    console.log(this.sound);
};

let boromir = {
    sound: 'One does not simply walk into mordor!'
};

boromir.speak          = talk.bind(boromir);
let blabber            = boromir.speak;

blabber();
talk();