import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import DropdowDirective from './dropdown.directive';
import LoadingSpinnerComponent from './loading-spinner/loading-spinner.component';
import ShortenPipe from './shorten.pipe';

@NgModule({
  declarations: [DropdowDirective, ShortenPipe, LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [DropdowDirective, ShortenPipe, LoadingSpinnerComponent, CommonModule],
})
export default class SharedModule {}
