import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MethodologyComponent } from './methodology/methodology.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UmldiagramComponent } from './umldiagram/umldiagram.component';
import { PracticesComponent } from './practices/practices.component';
import { ToolComponent } from './tool/tool.component';
import { BlogComponent } from './blog/blog.component';
import { TopicComponent } from './topic/topic.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { FrontComponent } from './front/front.component';


const routes: Routes = [
  {path: '', component: FrontComponent} ,
  {path: 'home', component: HomeComponent} ,
  {path: 'home/:subtopic', component: HomeComponent} ,
  {path: 'methodology', component: MethodologyComponent}, 
  {path: 'casestudies', component: CasestudiesComponent}, 
  {path: 'casestudies/:subtopic', component: CasestudiesComponent},
  {path: 'practices', component: PracticesComponent},
  {path: 'tool', component: ToolComponent}, 
  {path: 'blog', component: BlogComponent}, 
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}, 
  {path: 'umldiagram', component: UmldiagramComponent},
  {path: 'topic/:subtopic', component: TopicComponent},
  {path: '**',component: NotPageFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
