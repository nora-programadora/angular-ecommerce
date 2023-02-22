import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvf9wn1WvKWCp2eCV0atTl56ONzL6TyTPh702UMXqeHag2ZUG0YPch6-XWd2o4S_dK1J4&usqp=CAU'

  constructor() { }

  ngOnInit(): void {
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo')
    this.loaded.emit(this.img);
  }
}
