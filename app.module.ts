import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./pages/about/about.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonsModule, WavesModule, CardsModule } from "angular-bootstrap-md";
import { IconsModule } from "angular-bootstrap-md";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ButtonsModule,
    WavesModule,
    CardsModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
