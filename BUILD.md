sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

add in gradle.properties =>

MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=**\***
MYAPP_UPLOAD_KEY_PASSWORD=**\***

add in android/app/build.gradle

[link](https://reactnative.dev/docs/signed-apk-android#adding-signing-config-to-your-apps-gradle-config)

create build `./gradlew assembleRelease`
