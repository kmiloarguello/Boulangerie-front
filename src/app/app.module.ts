import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PastrieListComponent } from './pastrie-list/pastrie-list.component';
import { PastrieService } from './service/pastrie-service.service';

const routes: Routes = [
  { path: 'pastries', component: PastrieListComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    PastrieListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    // HttpModule,
    FormsModule
  ],
  providers: [PastrieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
