import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { StartComponent } from './app/pages/start/start.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

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


        ]), provideFirebaseApp(() => initializeApp({"projectId":"your-motivational-buddy","appId":"1:757806310363:web:0e517795cf35284eae7dfe","storageBucket":"your-motivational-buddy.appspot.com","apiKey":"AIzaSyCfg90nxHS6m4VjP-GbWTLCeEqhDXm6c3Y","authDomain":"your-motivational-buddy.firebaseapp.com","messagingSenderId":"757806310363","measurementId":"G-VBB8S8QWGV"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), 
        
    ]
})
.catch((err) => console.error(err));
