const {ui, Button} = require('tabris');

let push = global.PushNotification.init({ios: {alert: true, sound: true}});
push.on('registration', data => console.log(`registration id: ${data.registrationId}`));
push.on('notification', data => console.log(`additional data: ${this._handleNotification(data.additionalData)}`));
push.on('error', err => console.log(err));


new Button({centerX: 0, centerY: 0, text: 'Status'})
  .on('select', () => {
    cordova.plugins.diagnostic.isRemoteNotificationsEnabled(
      enabled => console.log('enabled: ' + enabled),
      error => console.log('not enabled: ' + error)
    );
  }).appendTo(ui.contentView)
