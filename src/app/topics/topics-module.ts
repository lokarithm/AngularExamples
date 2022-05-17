import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TopicRoutingAComponent } from './topic-routing-a/topic-routing-a.component';
import { TopicRoutingBComponent } from './topic-routing-b/topic-routing-b.component';
import { TopicsRoutingModule } from './topics-routing.module';


@NgModule({
  declarations: [
    TopicRoutingAComponent,
    TopicRoutingBComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class TopicsModule {}
