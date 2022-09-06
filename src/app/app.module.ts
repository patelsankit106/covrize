import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

// angular forms

import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { DigitalComponent } from './digital/digital.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';
import { Blog4Component } from './blog4/blog4.component';
import { SoftwareComponent } from './software/software.component';
import { TechnologyComponent } from './technology/technology.component';
import { CloudComponent } from './cloud/cloud.component';
import { SmartComponent } from './smart/smart.component';
import { ForComponent } from './for/for.component';
import { ForautoComponent } from './forauto/forauto.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { UiuxComponent } from './uiux/uiux.component';
import { DevopsComponent } from './devops/devops.component';
import { SolutionComponent } from './solution/solution.component';
import { CloudsComponent } from './clouds/clouds.component';
import { OpenComponent } from './open/open.component';
import { HiredotnetComponent } from './hiredotnet/hiredotnet.component';
import { HiredevopsComponent } from './hiredevops/hiredevops.component';
import { HireprojectComponent } from './hireproject/hireproject.component';
import { HirecloudComponent } from './hirecloud/hirecloud.component';
import { HirebusinessComponent } from './hirebusiness/hirebusiness.component';
import { HireuiuxComponent } from './hireuiux/hireuiux.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { OurcultureComponent } from './ourculture/ourculture.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PartnerComponent } from './partner/partner.component';
import { CareerComponent } from './career/career.component';
import { DiscoverComponent } from './discover/discover.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    Home1Component,
    Home2Component,
    ContactComponent,
    FooterComponent,
    DigitalComponent,
    AboutComponent,
    CarouselComponent,
    Blog1Component,
    Blog2Component,
    Blog3Component,
    Blog4Component,
    SoftwareComponent,
    TechnologyComponent,
    CloudComponent,
    SmartComponent,
    ForComponent,
    ForautoComponent,
    MicrosoftComponent,
    UiuxComponent,
    DevopsComponent,
    SolutionComponent,
    CloudsComponent,
    OpenComponent,
    HiredotnetComponent,
    HiredevopsComponent,
    HireprojectComponent,
    HirecloudComponent,
    HirebusinessComponent,
    HireuiuxComponent,
    LeadershipComponent,
    OurteamComponent,
    OurcultureComponent,
    CredentialsComponent,
    ProjectsComponent,
    BlogsComponent,
    PartnerComponent,
    CareerComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DropDownListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
