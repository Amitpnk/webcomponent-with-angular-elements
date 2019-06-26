import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'custom-select',
    templateUrl: './select.view.html',
    encapsulation: ViewEncapsulation.Native
})

export class SelectComponent {
    message: string;

    // @Input('msg')
    // set setMessage(msg: string) {
    //     this.message = msg;
    // }
    
    @Output('select-change')
    eventEmitter: EventEmitter<object> = new EventEmitter<object>();
    selectChangeHandler(event: any) {
        this.eventEmitter.emit(event.target.value);
        //update the ui
        this.message = event.target.value;
    }
}