import { LightningElement, wire  } from 'lwc';
import getContacts from '@salesforce/apex/contactController.getContacts';

export default class Exercise2 extends LightningElement {

    @wire(getContacts) 
    wiredContacts({ error, data }) {
        if (data) {
            this.jsContacts = data;
        } else if (error) {
            console.log(error);
        }
    }  
}

