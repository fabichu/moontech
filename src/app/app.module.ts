import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { CocktailCardComponent } from './components/cocktail-card/cocktail-card.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailComponent,
    CocktailCardComponent,
    CocktailDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
