import {LightningElement,api,wire} from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';

//* import jsName from '@salesforce/schema/Contact.Name'; *//
 
const fields = [
    'Contact.Name',
    'Contact.Title',
    'Contact.Phone',
    'Contact.Email',];
 
export default class Recordex extends LightningElement {
    @api recordId;
    @wire(getRecord, {recordId: '$recordId',fields}) contact;

    get name() {
        return this.contact.data.fields.Name.value;
    }

    get title() {
        return this.contact.data.fields.Title.value;
    }
 
    get phone() {
        return this.contact.data.fields.Phone.value;
    }
 
    get email() {
        return this.contact.data.fields.Email.value;
    }
}