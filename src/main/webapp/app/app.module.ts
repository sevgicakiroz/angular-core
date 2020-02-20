import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AngularCoreSharedModule } from 'app/shared/shared.module';
import { AngularCoreCoreModule } from 'app/core/core.module';
import { AngularCoreAppRoutingModule } from './app-routing.module';
import { AngularCoreHomeModule } from './home/home.module';
import { AngularCoreEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularCoreSharedModule,
    AngularCoreCoreModule,
    AngularCoreHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AngularCoreEntityModule,
    AngularCoreAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class AngularCoreAppModule {}
