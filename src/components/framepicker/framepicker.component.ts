import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'framepicker',
  templateUrl: './framepicker.component.html',
  styleUrls: ['./framepicker.component.scss'],
})

// Component to customize the frame separating logic from the main component
export class FramePickerComponent {

  @Output() frameChanged = new EventEmitter<{color: string, frame: number, border: number, texture: string}>();

  // Array of possible colors for the frame
  colors = [
    {color: 'black', hex: '#222222'},
    {color: 'white', hex: '#EEEEEE'},
    {color: 'grey', hex: '#A5A5A5'},
    {color: 'blue', hex: '#455CB4'},
    {color: 'lightBlue', hex: '#9AAEFF'},
    {color: 'red', hex: '#C64E4E'},
    {color: 'green', hex: '#60C369'}
  ];


  color = this.colors[0].hex;
  value = 15;
  value2 = 0;
  texture: any;


  // Default changed event and emit to app
  changed() {
    this.frameChanged.emit({color: this.color, frame: this.value, border: this.value2, texture: this.texture});
  }

  // Upload texture for the frame and transform to image
  onFileChange(event: any) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.texture = reader.result;
        this.changed();
      };
    }
  }

}
