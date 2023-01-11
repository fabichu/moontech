import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CocktailComponent } from './cocktail.component';

describe('CocktailComponent', () => {
  let component: CocktailComponent;
  let fixture: ComponentFixture<CocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocktailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
