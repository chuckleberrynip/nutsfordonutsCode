import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    buttonChecker = false;
    handleChange(event)
    {
        if(!this.buttonChecker)
        {
            this.buttonChecker = event.target.click;
        }
        else 
        {
            this.buttonChecker = false;
        }
    }
}
