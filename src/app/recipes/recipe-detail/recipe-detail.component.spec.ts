import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import ShoppingListService from 'src/app/shopping-list/shopping-list.service';
import RecipeService from '../recipe.service';
import RecipeDetailComponent from './recipe-detail.component';

describe('RecipeDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RecipeDetailComponent],
      providers: [ShoppingListService, RecipeService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RecipeDetailComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
