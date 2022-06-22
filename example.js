import { LightningElement,wire,track } from 'lwc';
import getDetails from '@salesforce/apex/exampleApex.getDetails';
export default class Example extends LightningElement {
    @track contacts;
    @wire(getDetails) item({error,data}){
    if(data){
        this.item=data;
        this.error=undefined;
    }
    else if(error){
        this.error=error;
        this.item=undefined;
    }
}
}