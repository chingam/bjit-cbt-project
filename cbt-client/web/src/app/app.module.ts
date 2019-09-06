import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponentComponent } from './components/dash-board-component/dash-board-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ParticipateExamComponent } from './components/participate-exam/participate-exam.component';

const appRoutes: Routes = [{ path: 'dashboard', component: DashBoardComponentComponent },
      { path: 'participateExam', component: ParticipateExamComponent }, { path: '**', redirectTo: 'dashboard' }];

@NgModule({
  declarations: [AppComponent, DashBoardComponentComponent, HeaderComponentComponent, FooterComponentComponent, ParticipateExamComponent],
  imports: [BrowserModule, AppRoutingModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
