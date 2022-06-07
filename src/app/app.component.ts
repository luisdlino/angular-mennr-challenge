import { Component, ViewChild } from '@angular/core';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageUrl: any;

  //Default values for the frame and picture
  color = '#222222';
  border = '4';
  frame = '8';
  texture = '';
  width = 280;
  height = 310;

  //Default Background Color
  backgroundColor= '#E5E7EE';


  //Container for create final image
  @ViewChild('container') container: any;


  // Function to upload and create url
  onFileChange(event: any) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }


  // Function create final image and download it using librarys dom-to-image and FileSaver
  downloadPicture() {
    domtoimage.toJpeg((this.container.nativeElement), { quality: 0.95 })
    .then(function (blob) {
        saveAs(blob, 'my-picture.jpeg');
    });
  }

  // Set frame when any of properties change
  setFrame(obj: any) {
    this.color = obj.color;
    this.border = obj.border;
    this.frame = obj.frame;
    this.texture = obj.texture;
  }
}
