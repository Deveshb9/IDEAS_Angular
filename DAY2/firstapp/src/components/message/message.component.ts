import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class Message {
  // @Input() msg: string = 'Hola !';
  // @Input() from: string = '';
  // @Input() to: string = '';

  @Input() messagedetails = { msg: '', from: '', to: '' , imageurl:''};
}
