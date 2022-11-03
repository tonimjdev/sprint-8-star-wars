import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { StarwarsModule } from './starwars/starwars.module';

import { UsersService } from './starwars/services/users.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StarwarsModule,
  ],
  providers: [ UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
