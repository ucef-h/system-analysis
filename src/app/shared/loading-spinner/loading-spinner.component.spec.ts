import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import LoadingSpinnerComponent from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoadingSpinnerComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoadingSpinnerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
