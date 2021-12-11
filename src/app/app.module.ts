import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
 import { HeaderComponent } from './Components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { CommingSoonComponent } from './Components/comming-soon/comming-soon.component';

const routes: Routes = [
  {path:"", component: BodyComponent},
  {path: "collections", component: CommingSoonComponent},
  {path: "men", component: CommingSoonComponent},
  {path: "women", component: CommingSoonComponent},
  {path: "about", component: CommingSoonComponent},
  {path: "contact", component: CommingSoonComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CommingSoonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
