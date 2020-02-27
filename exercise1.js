import { LightningElement, wire  } from 'lwc';

import getContactsImportedMethod from '@salesforce/apex/contactController.getContacts';

export default class Exercise1 extends LightningElement {

    @wire(getContactsImportedMethod) jsContacts;


}