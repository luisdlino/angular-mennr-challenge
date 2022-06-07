import { Component, ViewChild } from '@angular/core';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mennr-challenge';
  imageUrl: any;
  message = '';
  imagePath = '';

  color = '#222222';
  border = '4';
  frame = '8';
  texture = '';
  width = 280;
  height = 310;
  backgroundColor= '#E5E7EE'

  @ViewChild('container') container: any;


  onFileChange(event: any) {
    console.log(this.container);
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }

  downloadPicture() {

    domtoimage.toJpeg((this.container.nativeElement), { quality: 0.95 })
    .then(function (blob) {
        saveAs(blob, 'my-picture.jpeg');
    });
  }

  setFrame(obj: any) {
    console.log(obj);
    this.color = obj.color;
    this.border = obj.border;
    this.frame = obj.frame;
    this.texture = obj.texture;
    console.log(this.texture);
    console.log(this.color);
  }
}
