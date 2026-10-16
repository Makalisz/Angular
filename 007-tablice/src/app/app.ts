import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  names: string[] = ['Alex', 'Bob', 'Drake'];
  namesToDisplay: string[] = [...this.names];

  newName = '';
  indexToDelete = 1;
  searchedName = '';
  indexFound: number | null = null;
  filteredName = '';

  bikeTrips: number[] = [12, 16, 35, 20, 12, 24, 6, 58];
  bikeTripsToDisplay: number[] = [];

  ngOnInit() {
    this.bikeTripsToDisplay = [...this.bikeTrips]
      .sort((a, b) => b - a)
      .slice(0, 3);
  }

  add() {
    const name = this.newName.trim();

    if (name) {
      this.names.push(name);
      this.newName = '';
      this.filter();
    }
  }

  removeByIndex() {
    const index = this.indexToDelete - 1;

    if (index >= 0 && index < this.names.length) {
      this.names.splice(index, 1);
      this.filter();
      this.indexFound = null;
    }
  }

  removeLast() {
    this.names.pop();
    this.filter();
    this.indexFound = null;
  }

  sort() {
    this.names.sort((a, b) => a.localeCompare(b));
    this.filter();
  }

  reverse() {
    this.names.reverse();
    this.filter();
  }

  find() {
    this.indexFound = this.names.findIndex(
      name => name.toLowerCase() === this.searchedName.trim().toLowerCase()
    );
  }

  filter() {
    const search = this.filteredName.trim().toLowerCase();

    this.namesToDisplay = this.names.filter(name =>
      name.toLowerCase().includes(search)
    );
  }

  skills: string[] = ['50 pompek', '100 przysiadów', '100 brzuszków', '100kg na klatę', '10 podciągnięć'];

  pass(index: number){
    this.skills.splice(index, 1)
  }
}