import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { StartComponent } from './app/pages/start/start.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
      provideRouter(
        [
          /*{path: 'Home', component: CompAnalysisComponent},
          {path: 'home', redirectTo: 'Home', pathMatch: 'full'},

          {path: '', redirectTo: 'Home', pathMatch: 'full'},
           
            {path: 'Home', 
            loadComponent: () => import('./app/pages/start/start.component')
                .then(c => c.StartComponent)},*/


        ]), 
        
    ]
})
.catch((err) => console.error(err));
