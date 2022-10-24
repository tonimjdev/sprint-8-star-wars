import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './starwars/home/home.component';
import { StarshipcardComponent } from './starwars/starshipcard/starshipcard.component';
import { StarshipsComponent } from './starwars/starships/starships.component';


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