// File generated by FlutterFire CLI.
// ignore_for_file: type=lint
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        return windows;
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyCfHj_r1HwigLKzxWcGl2o77cVdVH8DvIQ',
    appId: '1:991352042055:web:4bd706a99192fc2b7b7762',
    messagingSenderId: '991352042055',
    projectId: 'medigo-4518c',
    authDomain: 'medigo-4518c.firebaseapp.com',
    storageBucket: 'medigo-4518c.firebasestorage.app',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyDtORn-7-SGbwaDM-fwOysxfzNG_ktoxjY',
    appId: '1:991352042055:android:050b725f6564e9017b7762',
    messagingSenderId: '991352042055',
    projectId: 'medigo-4518c',
    storageBucket: 'medigo-4518c.firebasestorage.app',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyD5mMNd6GDCl8i8D-OqlLj0O1mXClCiBCk',
    appId: '1:991352042055:ios:6a70975399d268aa7b7762',
    messagingSenderId: '991352042055',
    projectId: 'medigo-4518c',
    storageBucket: 'medigo-4518c.firebasestorage.app',
    iosBundleId: 'com.example.appointmentSchedulingApp',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyD5mMNd6GDCl8i8D-OqlLj0O1mXClCiBCk',
    appId: '1:991352042055:ios:6a70975399d268aa7b7762',
    messagingSenderId: '991352042055',
    projectId: 'medigo-4518c',
    storageBucket: 'medigo-4518c.firebasestorage.app',
    iosBundleId: 'com.example.appointmentSchedulingApp',
  );

  static const FirebaseOptions windows = FirebaseOptions(
    apiKey: 'AIzaSyCfHj_r1HwigLKzxWcGl2o77cVdVH8DvIQ',
    appId: '1:991352042055:web:5ca19e7efc067f7a7b7762',
    messagingSenderId: '991352042055',
    projectId: 'medigo-4518c',
    authDomain: 'medigo-4518c.firebaseapp.com',
    storageBucket: 'medigo-4518c.firebasestorage.app',
  );
}
