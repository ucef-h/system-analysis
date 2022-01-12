import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import AuthService from '../auth/auth/auth.service';
import RecipeService from '../recipes/recipe.service';
import DataStorageService from '../shared/data-storage.service';
import ShoppingListService from '../shopping-list/shopping-list.service';
import HeaderComponent from './header.component';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
      providers: [HttpHandler, HttpClient, AuthService, DataStorageService, RecipeService, ShoppingListService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
