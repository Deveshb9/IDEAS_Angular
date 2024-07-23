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
    imageurl:
      'https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-picture-icon-png-image_890152.jpg',
  };

  messageDetailsList: MessageModel[] = [
    {
      msg: 'Hi',
      from: '2',
      to: '20',
      imageurl:
      'https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-picture-icon-png-image_890152.jpg',
    },
    {
      msg: 'guys',
      from: '3',
      to: '30',
      imageurl: 
      'https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-picture-icon-png-image_890152.jpg',
    },
    {
      msg: 'IT me',
      from: '4',
      to: '40',
      imageurl: 
      'https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-picture-icon-png-image_890152.jpg',
    },
  ];
}
