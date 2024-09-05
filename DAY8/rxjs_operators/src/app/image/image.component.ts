import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  @Input() srcurl: string =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';
  @Input() altText?: string = 'Alternate Text !';
  @Input() captionText?: string = 'Caption Goes Here !';
}
