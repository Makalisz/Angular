import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './components/student/student';
import { Computer } from './components/computer/computer';
import { Author } from './components/author/author';
import { Binding } from './components/binding/binding';

@Component({
  imports: [RouterOutlet, CommonModule, Student, Computer, Author, Binding],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
