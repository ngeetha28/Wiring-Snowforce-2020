import { LightningElement, api,track, wire} from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';

//* import jsName from '@salesforce/schema/Contact.Name'; *//
const fields = [
    'Contact.Name',
    'Contact.Title',
    'Contact.Phone',
    'Contact.Email',
];
 
export default class Exercise4 extends LightningElement {
    @api recordId;
    @track jsRecord;
    @track jsError;
    

    @wire(getRecord, {recordId: '$recordId',fields})    
 wiredcontact({error,data}) {
        if(data) {
            this.jsRecord=data;

            this.jsError=undefined;
        } else if (error){
            this.jsError =error;
            this.jsRecord=undefined;
        }
} 


    get name() {
        return this.jsRecord.fields.Name.value;
    }
 
    get title() {
        return this.jsRecord.fields.Title.value;
    }
 
    get phone() {
        return this.jsRecord.fields.Phone.value;
    }
 
    get email() {
        return this.jsRecord.fields.Email.value;
    }
}