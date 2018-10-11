// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyD3ACwiAglqbrrvYmXVJGcdzVmdkgrhKC4',
    authDomain: 'brunoede-1.firebaseapp.com',
    databaseURL: 'https://brunoede-1.firebaseio.com',
    projectId: 'brunoede-1',
    storageBucket: 'brunoede-1.appspot.com',
    messagingSenderId: '629678641975'
  },
  googleDrive: {
    key: 'AIzaSyC4S3hmFyw22j7KESU7aMex1zITQJVdJcA'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
