import { Routes } from '@angular/router';
import { UnicastComponent } from './components/unicast/unicast.component';
import { AsyncPipeExampleComponent } from './components/async-pipe-example/async-pipe-example.component';
import { SubjectMulticastingComponent } from './components/subject-multicasting/subject-multicasting.component';
import { HomeComponent } from './components/home/home.component';
import { PipeAndOperatorsComponent } from './components/pipe-and-operators/pipe-and-operators.component';
import { RequestDataComponent } from './components/request-data/request-data.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'unicast', component: UnicastComponent },
  { path: 'async', component: AsyncPipeExampleComponent },
  { path: 'subject-multicast', component: SubjectMulticastingComponent },
  { path: 'pipe-and-operators', component: PipeAndOperatorsComponent },
  { path: 'request', component: RequestDataComponent },
  { path: 'display', component: DisplayDataComponent },
];
