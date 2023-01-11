import { Component } from '@angular/core';
import { CocktailService } from 'src/app/services/cocktail/cocktail.service';
import { CocktailCardComponent } from 'src/app/components/cocktail-card/cocktail-card.component';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent {
  cocktails$: any;
  filtros: { name: string; value: string }[] = [];
  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.filtros = [
      { name: 'name', value: 's' },
      { name: 'glass', value: 'g' },
      { name: 'ingredients', value: 'i' },
      { name: 'category', value: 'c' },
    ];
  }

  search(nombre: string, filtro: string) {
    this.cocktailService.getCocktail(filtro, nombre).subscribe((data: any) => {
      this.cocktails$ = data['drinks'];
    });
  }
}
