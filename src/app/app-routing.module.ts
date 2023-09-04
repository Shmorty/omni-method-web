import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {AboutComponent} from './page/about/about.component';
import {PrivacyComponent} from './page/privacy/privacy.component';
import {TermsComponent} from './page/terms/terms.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'terms', component: TermsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
