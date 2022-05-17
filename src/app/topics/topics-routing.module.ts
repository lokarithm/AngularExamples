import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicRoutingAComponent } from './topic-routing-a/topic-routing-a.component';
import { TopicRoutingBComponent } from './topic-routing-b/topic-routing-b.component';
import { TopicsComponent } from './topics.component';

const routes: Routes = [
  { path: '', component: TopicsComponent,
    children: [
      { path: '', redirectTo: 'routing-a', pathMatch: 'full' },
      { path: 'routing-a', component: TopicRoutingAComponent },
      { path: 'routing-b', component: TopicRoutingBComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicsRoutingModule {}
