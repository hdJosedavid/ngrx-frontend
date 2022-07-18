import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {


  constructor() { }

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        name: "Character #1",
        price: 0.2,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #2",
        price: 0.1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #3",
        price: 0.3,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #4",
        price: 0.4,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #5",
        price: 0.5,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #6",
        price: 0.6,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #7",
        price: 0.7,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #8",
        price: 0.8,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #9",
        price: 0.9,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #10",
        price: 0.9,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #11",
        price: 0.9,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      },
      {
        name: "Character #12",
        price: 0.9,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Math.floor(Math.random() * 100)}.svg`
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }



}
