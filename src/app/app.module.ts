import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MethodologyComponent } from './methodology/methodology.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UmldiagramComponent } from './umldiagram/umldiagram.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { PracticesComponent } from './practices/practices.component';
import { ToolComponent } from './tool/tool.component';
import { BlogComponent } from './blog/blog.component';
import { TopicComponent } from './topic/topic.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { ToolmenuComponent } from './toolmenu/toolmenu.component';
import { FrontComponent } from './front/front.component';
import { TableComponent } from './table/table.component';
import { TablepopupComponent } from './tablepopup/tablepopup.component';
import { ImagepopupComponent } from './imagepopup/imagepopup.component';
import { ImageComponent } from './image/image.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    MethodologyComponent,
    CasestudiesComponent,
    PracticesComponent,
    ToolComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    SearchComponent,
    UmldiagramComponent,
    TopicComponent,
    NotPageFoundComponent,
    ToolmenuComponent,
    FrontComponent,
    TableComponent,
    TablepopupComponent,
    ImagepopupComponent,
    ImageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
