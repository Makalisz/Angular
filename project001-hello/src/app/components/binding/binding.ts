import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-binding',
  styleUrl: './binding.css',
  templateUrl: './binding.html',
})
export class Binding {
  image: string = 'images/pasikonik.jpg';

  lock: boolean = false;

  color: string = 'black';

  ram: number = 8;

  ramMinus(){
    if(this.ram > 1){
      this.ram /= 2;
    }
  }

    ramPlus(){
    if(this.ram < 64){
      this.ram *= 2;
    }
  }

  category: string = 'nothing';

}
