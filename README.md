For React-native App link:
https://www.youtube.com/playlist?list=PLQWFhX-gwJbmmqcP-9zMXBaxQbGKfIJY2
    

https://github.com/itzpradip/react-native-firebase-social-app
    Prettier - Code formatter / format-document set default
    material-icons

*** Installation(Android Expo CLI) ***
1.  Java JDK 15
2.  As per OS (windows x64 installer)
3.  Add JAVA_HOME Environmental variable  
4.  If node not install then first install it..install Node.js LTS
5. npm install -g react-native-cli
6. install VS Code
7. install Android-studio
8. install Android SDK Pie (Tools - SDK Manager - AVD Manager)
9. Add ANDROID_HOME to User Environmental variable 
10. Create New react-native project 
    -   npx react-native init my_first_rn_app
11. cd Emulator path 
    - ( run emulator -list-avds)
12. start app 
    - (run emulator -avd _avdName)
13. Run app 
    - (npx react-native run android)

*** React Native CLI ***
-   https://reactnative.dev/docs/environment-setup

Run on Android 
    npx react-native run-android

*** React Navigation *** 
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
mac/ios --- npx pod-install ios
npm install @react-navigation/native-stack


For Swiper
https://github.com/jfilter/react-native-onboarding-swiper
npm i react-native-onboarding-swiper

Drawer-navigator - slide left to right
https://www.youtube.com/watch?v=2Tj9y8lfiyo&list=PLQWFhX-gwJbmmqcP-9zMXBaxQbGKfIJY2&index=2

*** Async Storage Installation ***
    npm install @react-native-async-storage/async-storage

*** Vector-icon-setup *** 
    https://www.youtube.com/watch?v=B75yZwYS4z8&t=249s
    https://www.youtube.com/watch?v=G_t7n4rf15U
    https://github.com/oblador/react-native-vector-icons/


*** React Native Firebase Installation ***
    Install via NPM
        # Using npm
        npm install --save @react-native-firebase/app

*** Authentication ****
<!-- https://www.youtube.com/watch?v=J7pkSP18Oko&t=833s -->
    npm install @react-native-firebase/auth

Android Setup
    Firebase - go to console - create / add project
IOS setup
    Firebase - go to console - create / add project - after all setting need to install pod 
        cd ios
        pod install and run project

*** Google Login in React Native with Firebase (https://github.com/react-native-google-signin/google-signin/blob/master/docs/android-guide.md) ***

    npm install @react-native-google-signin/google-signin

    Go to -> android -> app ->  keytool -genkey -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android -keyalg RSA -validity 10000 (use for create new key store)

    keytool -keystore debug.keystore -list -v
        copy SHA1 key, paste in firebase fingerprint and downlode google-service.json and replace with old one.

*** Button navigator ***
    npm install @react-navigation/bottom-tabs

*** Material  Button navigator ***
    npm install @react-navigation/material-bottom-tabs react-native-paper