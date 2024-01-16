(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    interface HtmlElementProps {
        id: string;
        type: HtmlType;
    }

    class HtmlElement {
        public id : string;
        public type: HtmlType;
        constructor({id, type}: HtmlElementProps) {
            this.id = id;
            this.type = type;
        }
    }

    interface InputAttributesProps {
        value: string;
        placeholder: string;
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;
        constructor({value, placeholder}: InputAttributesProps){
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    interface InputEventsProps {
        value: string, 
        placeholder: string, 
        id: string,
    }

    class InputEvents {
        public inputAttributes: InputAttributes;
        public htmlElement: HtmlElement
        constructor( {value, placeholder, id}: InputEventsProps ) {
            this.inputAttributes = new InputAttributes({value, placeholder});
            this.htmlElement = new HtmlElement({id, type: 'input'})
            
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputEvents({value: 'Fernando', placeholder: 'Enter first name', id: 'txtName'});

    console.log({ nameField });

})()