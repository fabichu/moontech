import { Component } from '@angular/core';
import { CocktailService } from 'src/app/services/cocktail/cocktail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css'],
})
export class CocktailDetailsComponent {
  cocktail$: any;
  id: string = '';
  constructor(
    private cocktailService: CocktailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.cocktailService.getSingleCocktail(this.id).subscribe((data: any) => {
      this.cocktail$ = data['drinks'][0];
    });
  }

  volver() {
    window.history.back();
  }
}
