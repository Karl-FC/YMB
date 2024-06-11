import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

import { initializeApp,provideFirebaseApp } from "@angular/fire/app";
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

  const firebaseConfig = {
    apiKey: "AIzaSyCfg90nxHS6m4VjP-GbWTLCeEqhDXm6c3Y",
    authDomain: "your-motivational-buddy.firebaseapp.com",
    projectId: "your-motivational-buddy",
    storageBucket: "your-motivational-buddy.appspot.com",
    messagingSenderId: "757806310363",
    appId: "1:757806310363:web:0e517795cf35284eae7dfe",
    measurementId: "G-VBB8S8QWGV"
  };
  

export const appConfig: ApplicationConfig = {
  providers: [provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    provideRouter(routes),
    provideHttpClient(), 
    provideClientHydration()]
};

