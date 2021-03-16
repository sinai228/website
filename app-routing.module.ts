import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AboutComponent } from "./pages/about/about.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { ContactComponent } from "./pages/contact/contact.component";

const routes: Routes = [
  { path: "", component: AboutComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "resume", component: ResumeComponent },
  { path: "contact", component: ContactComponent },

  // otherwise redirect to home
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
