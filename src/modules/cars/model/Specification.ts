import { v4 as uuidv4 } from 'uuid';

class Specification {
    id?: string;
    name:string;
    description:string;
    created_ad?:Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
        this.created_ad = new Date();
     
    }
}

export { Specification }