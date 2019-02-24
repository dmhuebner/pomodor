// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAjrTue4kmMY5lHLBE9FfLUFG6rfQ7SR5w',
    authDomain: 'pomodor-test.firebaseapp.com',
    databaseURL: 'https://pomodor-test.firebaseio.com',
    projectId: 'pomodor-test',
    storageBucket: 'pomodor-test.appspot.com',
    messagingSenderId: '506373942871'
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
