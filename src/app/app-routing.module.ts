import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MethodologyComponent } from './methodology/methodology.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UmldiagramComponent } from './umldiagram/umldiagram.component';



const routes: Routes = [
  {path: '', component: HomeComponent} ,
  {path: 'methodology', component: MethodologyComponent}, 
  {path: 'casestudies', component: CasestudiesComponent}, 
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}, 
  {path: 'umldiagram', component: UmldiagramComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
