import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-special',
  styleUrl: './special.css',
  templateUrl: './special.html',
})
export class Special {
  id: number = 0;
  ids = signal(0);

  constructor(private route: ActivatedRoute){

  }
  // Zdarzenie wywoływane na początku istnienia parametru
  ngOnInit(){
    //Pobranie parametru id ze ścieżki  URL
    //this.id = Number(this.route.snapshot.paraMap.get('id'));
    this.route.paramMap.subscribe(paraMap => {
      // Normalna zmienna (pole klasy)
      this.id = Number(paraMap.get('id'));

      // Sygnał
      this.ids.set(Number(paraMap.get('id')));
    })
  }
}
