import { Component } from '@angular/core';
import { MessageModel } from '../models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'firstapp';
  firstMessage: MessageModel = {
    msg: 'Hello guys',
    from: '1',
    to: '10',
    imgUrl:
      'https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-picture-icon-png-image_890152.jpg',
  };

  messageDetailsList: MessageModel[] = [
    {
      msg: 'Hi',
      from: '2',
      to: '20',
      imgUrl: '',
    },
    {
      msg: 'guys',
      from: '3',
      to: '30',
      imgUrl: '',
    },
  ];
}
