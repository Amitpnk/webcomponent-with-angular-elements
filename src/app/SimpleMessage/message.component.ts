import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'custom-message',
    templateUrl: './message.view.html',
    encapsulation: ViewEncapsulation.Native
})

export class MessageComponent {
    message: string;

    @Input('msg')
    set setMessage(msg: string) {
        this.message = msg;
    }
}