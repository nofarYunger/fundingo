import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CategoryListComponent } from './cmps/category-list/category-list.component';
import { CategoryPreviewComponent } from './cmps/category-preview/category-preview.component';
import { TotalChartComponent } from './cmps/total-chart/total-chart.component';

@NgModule({
  declarations: [AppComponent, CategoryPageComponent, CategoryListComponent, CategoryPreviewComponent, TotalChartComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
