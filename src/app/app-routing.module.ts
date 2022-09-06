import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Blog1Component } from './blog1/blog1.component';
import { Blog2Component } from './blog2/blog2.component';
import { Blog3Component } from './blog3/blog3.component';
import { Blog4Component } from './blog4/blog4.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CareerComponent } from './career/career.component';
import { CloudComponent } from './cloud/cloud.component';
import { CloudsComponent } from './clouds/clouds.component';
import { ContactComponent } from './contact/contact.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { DevopsComponent } from './devops/devops.component';
import { DigitalComponent } from './digital/digital.component';
import { ForComponent } from './for/for.component';
import { ForautoComponent } from './forauto/forauto.component';
import { HirebusinessComponent } from './hirebusiness/hirebusiness.component';
import { HirecloudComponent } from './hirecloud/hirecloud.component';
import { HiredevopsComponent } from './hiredevops/hiredevops.component';
import { HiredotnetComponent } from './hiredotnet/hiredotnet.component';
import { HireprojectComponent } from './hireproject/hireproject.component';
import { HireuiuxComponent } from './hireuiux/hireuiux.component';
import { Home1Component } from './home1/home1.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { OpenComponent } from './open/open.component';
import { OurcultureComponent } from './ourculture/ourculture.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { PartnerComponent } from './partner/partner.component';
import { ProjectsComponent } from './projects/projects.component';
import { SmartComponent } from './smart/smart.component';
import { SoftwareComponent } from './software/software.component';
import { SolutionComponent } from './solution/solution.component';
import { TechnologyComponent } from './technology/technology.component';
import { UiuxComponent } from './uiux/uiux.component';

const routes: Routes = [
 
 

{path:"", redirectTo: 'home1', pathMatch: 'full'},

{path:'home1',component:Home1Component},
{path:'contact',component:ContactComponent},
{path:'digital',component:DigitalComponent},
{path:'about',component:AboutComponent},
{path:'blog1',component:Blog1Component},
{path:'blog2',component:Blog2Component},
{path:'blog3',component:Blog3Component},
{path:'blog4',component:Blog4Component},
{path:'software',component:SoftwareComponent},
{path:'technology',component:TechnologyComponent},
{path:'cloud',component:CloudComponent},
{path:'smart',component:SmartComponent},
{path:'for',component:ForComponent},
{path:'forauto',component:ForautoComponent},

{path:'microsoft',component:MicrosoftComponent},
{path:'uiux',component:UiuxComponent},
{path:'devops',component:DevopsComponent},
{path:'solution',component:SolutionComponent},
{path:'clouds',component:CloudsComponent},
{path:'open',component:OpenComponent},

{path:'hiredotnet',component:HiredotnetComponent},
{path:'hiredevops',component:HiredevopsComponent},
{path:'hireproject',component:HireprojectComponent},
{path:'hirecloud',component:HirecloudComponent},
{path:'hirebusiness',component:HirebusinessComponent},
{path:'hireuiux',component:HireuiuxComponent},

{path:'leadership',component:LeadershipComponent},
{path:'ourteam',component:OurteamComponent},
{path:'ourculture',component:OurcultureComponent},
{path:'credentials',component:CredentialsComponent},
{path:'projects',component:ProjectsComponent},
{path:'partner',component:PartnerComponent},
{path:'career',component:CareerComponent},
{path:'blogs',component:BlogsComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
