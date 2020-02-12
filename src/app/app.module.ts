import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PastrieListComponent } from './pastrie-list/pastrie-list.component';
import { PastrieService } from './service/pastrie-service.service';
import { PastrieIdComponent } from './pastrie-id/pastrie-id.component';
import { PastrieNewComponent } from './pastrie-new/pastrie-new.component';
import { PastrieHomeComponent } from './pastrie-home/pastrie-home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
const routes: Routes = [
  { path: '', component: PastrieHomeComponent },
  { path: 'pastries', component: PastrieListComponent },
  { path: 'pastries/new', component: PastrieNewComponent },
  { path: 'pastries/:id', component: PastrieIdComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PastrieListComponent,
    PastrieIdComponent,
    PastrieNewComponent,
    PastrieHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [PastrieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
