import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { UIModule } from './modules/ui/ui.module';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';
import { DetailsModule } from './pages/details/details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    UIModule,
    PageNotFoundModule,
    DetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
