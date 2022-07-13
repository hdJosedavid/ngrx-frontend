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
        image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg"
      },
      {
        name: "Character #2",
        price: 0.1,
        image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg"
      },
      {
        name: "Character #3",
        price: 0.3,
        image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg"
      },
      {
        name: "Character #4",
        price: 0.4,
        image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg"
      },
      {
        name: "Character #5",
        price: 0.5,
        image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg"
      },
      {
        name: "Character #6",
        price: 0.6,
        image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg"
      },
      {
        name: "Character #7",
        price: 0.7,
        image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg"
      },
      {
        name: "Character #8",
        price: 0.8,
        image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg"
      },
      {
        name: "Character #9",
        price: 0.9,
        image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
      },
      {
        name: "Character #10",
        price: 0.9,
        image: "https://rickandmortyapi.com/api/character/avatar/110.jpeg"
      },
      {
        name: "Character #11",
        price: 0.9,
        image: "https://rickandmortyapi.com/api/character/avatar/111.jpeg"
      },
      {
        name: "Character #12",
        price: 0.9,
        image: "https://rickandmortyapi.com/api/character/avatar/112.jpeg"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }



}
