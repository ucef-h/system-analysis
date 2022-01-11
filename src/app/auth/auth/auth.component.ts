import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponceData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error:string  | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    return;
  }

  onSwithchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if(!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObsarvables: Observable<AuthResponceData>;

    this.isLoading = false;
    if(this.isLoginMode) {
      authObsarvables = this.authService.loging(email, password);
    } else {
      authObsarvables = this.authService.signup(email, password);
    }

    authObsarvables.subscribe(
      resultData => {
        console.log(resultData);
        this.isLoading = false;
        this.router.navigate(['../recipes']);
      }, errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}