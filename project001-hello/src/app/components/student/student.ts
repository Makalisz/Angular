import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
    name: string = 'Zosia';
  age: number = 16;
  isStudent: boolean = true;
  averageGrade: number = 6.0;
  examDate: string = '2026-09-04 10:00'

  isAdult(): boolean {
    return this.age >= 18;
  }

  getPrize(): number {
    if(this.averageGrade >= 4.75){
      return 500;
    } else{
      return 0;
    }
  }

  increaseAge(){
    this.age++
  }

  decreaseAge(){
    this.age--
  }
}
