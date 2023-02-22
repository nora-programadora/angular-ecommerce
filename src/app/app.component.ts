import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  imgParent = 'https://www.noraprogramadora.com/wp-content/uploads/2020/06/cropped-cropped-IMG_20170219_194544-e1592100658919.jpg'
  title = 'ecommerce';

  onLoaded(img: string){
    console.log('log padre' , img)
  }
}
