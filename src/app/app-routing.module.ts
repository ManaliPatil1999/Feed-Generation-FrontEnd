import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './auth.guard';
import { UploadComponent } from './upload/upload.component';
import { FeedComponent } from './feed/feed.component';
import { SuccessfulOrUnsuccessfulComponent } from './successful-or-unsuccessful/successful-or-unsuccessful.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuard]},
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  {path : 'upload', component: UploadComponent, canActivate:[AuthGuard]},
  {path : 'feed', component: FeedComponent, canActivate:[AuthGuard]},
  {path : 'success', component: SuccessfulOrUnsuccessfulComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [UploadComponent, LoginComponent, LogoutComponent
,SuccessfulOrUnsuccessfulComponent, FeedComponent]

