import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  img: string = '';

  @Input('img') 
  set changeImg(newImg:string){
    this.img = newImg;
    console.log('change just img: ', this.img)
    //code
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvf9wn1WvKWCp2eCV0atTl56ONzL6TyTPh702UMXqeHag2ZUG0YPch6-XWd2o4S_dK1J4&usqp=CAU'
  counter = 0;
  counterFn: number | undefined;

  constructor() {
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before render and during render
    // change inputs - n times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes: ',changes);

    // if(changes.img)

  }

  ngOnInit(): void {
    // before render
    // async - fetch -- once times
    console.log('ngOnInit');
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter')
    }, 1000)
  }

  ngAfterViewInit(): void {
    // after render
    // handle children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //delete
    window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo')
    this.loaded.emit(this.img);
  }
}
