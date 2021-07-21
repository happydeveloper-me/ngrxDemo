import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyvalueComponent } from './components/keyvalue/keyvalue.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'keyvalue',
    component: KeyvalueComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
