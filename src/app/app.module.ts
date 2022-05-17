import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicMenuComponent } from './topics/topic-menu/topic-menu.component';
import { TopicsModule } from './topics/topics-module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    TopicMenuComponent,
    TopicsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
