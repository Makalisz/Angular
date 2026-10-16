import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // EDYCJA STUDENTÓW
  name: string = 'Maks';
  age: number = 17;
  isStudent: boolean = false;

  nameSnapshot: string = 'Maks';
  ageSnapshot: number = 16;

  apply() {
    this.ageSnapshot = this.age;
    this.nameSnapshot = this.name;  
  }

  // SYSTEMY LICZBOWE
  myNumber: string = '1999';
  base: number = 10;
  oldBase: number = 10;

  convertNumber(){
    let temp = parseInt(this.myNumber, this.oldBase);
    this.myNumber = temp.toString(this.base);
    this.oldBase = this.base;
  }

  // EMOJI SELECTOR

  emoji: string = '🍌';
}
