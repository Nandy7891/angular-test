import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';

import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';

import { RouterModule,Routes } from "@angular/router";
import { ListeComponent } from './liste/liste.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const appRoutes: Routes =[
    {path:'appareils', component: AppareilViewComponent },
    {path: 'appareils/:id', component: SingleAppareilComponent },
    {path:'auth', component: AuthComponent },
    {path:'', component: AppareilViewComponent },
    {path:'monPremier', component: MonPremierComponent },
    {path:'not-found' , component:FourOhFourComponent},
    {path: '**', redirectTo:'/not-found'}
    
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    ListeComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
