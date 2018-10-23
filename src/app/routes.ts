import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';
import { GuestsComponent } from './guests/guests.component';
export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'guests', component: GuestsComponent},
  // {
  //     path: '',
  //     runGuardsAndResolvers: 'always',
  //     canActivate: [AuthGuard],
  //     children: [
  //         {path: 'members', component: MemberListComponent,
  //             resolve: {users: MemberListResolver}},
  //         {path: 'members/:id', component: MemberDetailComponent,
  //             resolve: {user: MemberDetailResolver}},
  //         {path: 'member/edit', component: MemberEditComponent,
  //             resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
  //         {path: 'messages', component: MessagesComponent},
  //         {path: 'lists', component: ListsComponent, resolve: {users: ListsResolver}},
  //     ]
  // },
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
