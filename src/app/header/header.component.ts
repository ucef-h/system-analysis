import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import AuthService from '../auth/auth/auth.service';
import DataStorageService from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export default class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;

  private userSubscription: Subscription;

  constructor(private storageService: DataStorageService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  onSaveData() {
    this.storageService.storeRecipes();
  }

  onFetchData() {
    this.storageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
