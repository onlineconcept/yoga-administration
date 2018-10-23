import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';
import { GuestsComponent } from './guests/guests.component';
import { SettingsComponent } from './settings/settings.component';
export const appRoutes: Routes = [
  {path: 'teachers', component: TeachersComponent},
  {path: 'guests', component: GuestsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'employeer', component: HomeComponent},
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
  {path: '**', redirectTo: 'employeer', pathMatch: 'full'},
];
