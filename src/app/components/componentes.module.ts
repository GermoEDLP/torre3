import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { AboutComponent } from './about/about.component';
import { CallComponent } from './call/call.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeadersComponent } from './headers/headers.component';
import { HeroComponent } from './hero/hero.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { TopBarsComponent } from './top-bars/top-bars.component';
import { CardsComponent } from './cards/cards.component';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { AppRoutingModule } from '../app-routing.module';
import { RecaptchaModule } from 'ng-recaptcha';



@NgModule({
  declarations: [
    AboutComponent,
    CallComponent,
    ClientComponent,
    ContactComponent,
    FooterComponent,
    HeadersComponent,
    HeroComponent,
    PortfolioComponent,
    ServicesComponent,
    TeamComponent,
    TopBarsComponent,
    CardsComponent,
    PortfolioProjectComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RecaptchaModule
  ],
  exports: [
    AboutComponent,
    CallComponent,
    ClientComponent,
    ContactComponent,
    FooterComponent,
    HeadersComponent,
    HeroComponent,
    PortfolioComponent,
    ServicesComponent,
    TeamComponent,
    TopBarsComponent,
    CardsComponent
  ]
})
export class ComponentesModule { }
