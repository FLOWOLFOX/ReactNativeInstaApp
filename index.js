/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import App from './App';
import {name as appName} from './app.json';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

PushNotification.configure({
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios'
})

AppRegistry.registerComponent(appName, () => App);