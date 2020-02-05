import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PastrieListComponent } from './pastrie-list/pastrie-list.component';
import { PastrieService } from './service/pastrie-service.service';
import { PastrieIdComponent } from './pastrie-id/pastrie-id.component';

const routes: Routes = [
  { path: 'pastries', component: PastrieListComponent },
  { path: 'pastries/:id', component: PastrieIdComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PastrieListComponent,
    PastrieIdComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [PastrieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
