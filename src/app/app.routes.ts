import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ServicesSoftwareDevelopmentComponent } from './pages/services-software-development/services-software-development.component';
import { ServicesDevopsComponent } from './pages/services-devops/services-devops.component';
import { ServicesContinuosTestAutomatiionComponent } from './pages/services-continuos-test-automatiion/services-continuos-test-automatiion.component';
import { ServicesIOTComponent } from './pages/services-iot/services-iot.component';
import { ServicesObservabilityComponent } from './pages/services-observability/services-observability.component';
import { ServicesDataEngineeringComponent } from './pages/services-data-engineering/services-data-engineering.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'jobs', component: JobsComponent},
    {path:'services/software', component: ServicesSoftwareDevelopmentComponent},
    {path:'services/devops', component: ServicesDevopsComponent},
    {path:'services/automation', component: ServicesContinuosTestAutomatiionComponent},
    {path:'services/iot', component: ServicesIOTComponent},
    {path:'services/observability', component: ServicesObservabilityComponent},
    {path:'services/data', component: ServicesDataEngineeringComponent},
    {path:'**', redirectTo: 'home'}];
    
