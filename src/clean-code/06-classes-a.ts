//Introduccion a las clases en typescript
( () => {
    type Gender = 'M' | 'F';
    class Person {
        

        constructor(
            public name:string,
            public gender: Gender,
            public birthdate: Date,
            ){}
    }

    const newPerson = new Person('Fiorela', 'F', new Date('1995-07-20'));
    console.log({ newPerson });
    

})();