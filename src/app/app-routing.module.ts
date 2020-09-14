import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UnlockpdfComponent } from './unlockpdf/unlockpdf.component';
import { VideoConferenceComponent } from './video-conference/video-conference.component';


const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "unlockpdf", component: UnlockpdfComponent },
  { path: "videoconference", component: VideoConferenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
