# About
This repo is for the following purposes:
1. build a chat app?
2. react-native with expo ejected...

## Technologies I'm checking out
- [x] TypeScript
- [x] @react-navigation for more "traditional" routing
- [x] firebase for chat
- [ ] & react-firebase-hooks for authentication

## Tips on Running the Project
1. nvm use && yarn ios
2. use expo install instead of yarn add to avoid issues?
3. 


## Known Possible Issues:
1. error: 'shouldUseActivityState' is not exported from 'react-native-screens'
   - [9129](https://github.com/react-navigation/react-navigation/issues/9129)
   - fix `code ./node_modules/@react-navigation/bottom-tabs/lib/module/views/ResourceSavingScene.js`, then change line 5 & 6, to `import { Screen, screensEnabled } from 'react-native-screens';` see [8993](https://github.com/react-navigation/react-navigation/issues/8993#issuecomment-717196279) for details...
   - could also use some sort of linux comand to find and replace the text using grep or something...?
2. console.error: fontFamily "Ionicons" is not a system font and has not been loaded through Font.loadAsync.

- If you intended to use a system font, make sure you typed the name correctly and that it is supported by your device operating system.

- If this is a custom font, be sure to load it with Font.loadAsync. 
RCTText



## Resources:
1. Configuration
   - [locking the node environment](https://medium.com/@faith__ngetich/locking-down-a-project-to-a-specific-node-version-using-nvmrc-and-or-engines-e5fd19144245)
2. Bluetooth
   - [Get Net Info such as bluetooth, wifi, etc](https://www.youtube.com/watch?v=26dk9cLfgfU&ab_channel=ProgrammingwithMash)
   - [Detaching Expo for BLE](https://blog.expo.io/so-you-want-to-build-a-bluetooth-app-with-react-native-and-expo-6ea6a31a151d)
   - [LED BLE Example](https://itnext.io/using-a-raspberry-pi-to-control-leds-part-iii-react-native-app-29ee3f4afb8c)
3. Firebase
   - [RN Firebase](https://rnfirebase.io/screencasts/authentication-overview)
   - []
4. Hooks
   - [useInfo](https://www.nishith.studio/post/react-native-hooks/)
   - https://reactnativemaster.com/react-native-netinfo-example/
5. Chat Tutorials
   - [3 Part with Context API](https://heartbeat.fritz.ai/chat-app-with-react-native-part-2-firebase-user-authentication-with-react-native-firebase-533352870497)
   - [Chat App Tutorial](https://blog.expo.io/how-to-build-a-chat-app-with-react-native-3ef8604ebb3c)
   - [other](https://getstream.io/chat/react-native-chat/tutorial/)
   - [react firebase and firebase "serverless" fucntion](https://www.youtube.com/watch?v=zQyrwxMPm88&ab_channel=Fireship)
   - [Stream Chat](https://getstream.io/chat/react-native-chat/tutorial/)
6. Navigation / Routings
   - [Basic](https://reactnavigation.org/docs/tab-based-navigation)
   - [Authentication (structure) ](https://reactnavigation.org/docs/auth-flow)
7. Icons
   - [expo icons](https://icons.expo.fyi/)
8. Talks
   - [Event-Driven Bluetooth Handling in React Native: Which library should you choose? - Martin Heller](https://www.youtube.com/watch?v=_6Ij902Q_cI&ab_channel=ReactConferencesbyGitNation)
9.  