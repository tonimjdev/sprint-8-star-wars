import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './starwars/home/home.component';
import { StarshipcardComponent } from './starwars/starshipcard/starshipcard.component';
import { StarshipsComponent } from './starwars/starships/starships.component';
import { LoginComponent } from "./starwars/login/login.component";
import { SignupComponent } from './starwars/signup/signup.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'starships',
        component: StarshipsComponent
    },
    {
        path: 'starships/:id',
        component: StarshipcardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}