import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(private http: HttpClient) {}

  getCocktail(filtro: string, nombre: string) {
    if (filtro === 's') {
      return this.http.get(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php',
        {
          params: { s: nombre },
        }
      );
    } else {
      return this.http.get(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
        {
          params: { [filtro]: nombre },
        }
      );
    }
  }

  getSingleCocktail(id: string) {
    return this.http.get(
      'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
      {
        params: { i: id },
      }
    );
  }
}
