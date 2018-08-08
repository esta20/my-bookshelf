// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
   // Initialize Firebase
    firebase: {
    apiKey: "AIzaSyD955U9xm4uRaRUsG9qRJjhsqmyovmdjCk",
    authDomain: "my-bookshelf-mb.firebaseapp.com",
    databaseURL: "https://my-bookshelf-mb.firebaseio.com",
    projectId: "my-bookshelf-mb",
    storageBucket: "my-bookshelf-mb.appspot.com",
    messagingSenderId: "827474091810"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
