// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDNVHmGrS9hWxnyiwUWHPyKQL_Tv4f3p0M',
    authDomain: 'pomodor-7bdd1.firebaseapp.com',
    databaseURL: 'https://pomodor-7bdd1.firebaseio.com',
    projectId: 'pomodor-7bdd1',
    storageBucket: 'pomodor-7bdd1.appspot.com',
    messagingSenderId: '262740402954'
  },
  localUSBLightBaseUrl: 'http://127.0.0.1:5033/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
