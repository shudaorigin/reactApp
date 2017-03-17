package com.reactapp;

import android.app.Application;
import android.util.Log;
import com.facebook.react.ReactApplication;
import rnxmpp.RNXMPPPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.keyee.pdfview.PDFView;
import com.imagepicker.ImagePickerPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.rnfs.RNFSPackage;
import com.honaf.dialog.MyDialogPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.psykar.cookiemanager.CookieManagerPackage;
import com.remobile.splashscreen.RCTSplashScreenPackage;
import rnxmpp.RNXMPPPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.remobile.splashscreen.RCTSplashScreenPackage;
import com.honaf.dialog.MyDialogPackage;
import com.horcrux.svg.SvgPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import rnxmpp.RNXMPPPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.keyee.pdfview.PDFView;
import com.psykar.cookiemanager.CookieManagerPackage;
import com.rnfs.RNFSPackage;
import com.keyee.pdfview.PDFView;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.imagepicker.ImagePickerPackage;
import com.microsoft.codepush.react.CodePush;
import com.microsoft.codepush.react.BuildConfig;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {


    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
	      //new PDFView(), // <------ add here
          new MainReactPackage(),
            new RNXMPPPackage(),
            new ReactVideoPackage(),
            new VectorIconsPackage(),
            new SvgPackage(),
            new ReactNativePushNotificationPackage(),
            new PDFView(),
            new ImagePickerPackage(),
            new PickerPackage(),
            new RNFSPackage(),
            new MyDialogPackage(),
            new RNDeviceInfo(),
            new CookieManagerPackage(),
            new RCTSplashScreenPackage(MainActivity.activity),  
/*			
          new ReactVideoPackage(),
          new PickerPackage(),
          new RNDeviceInfo(),
          new RCTSplashScreenPackage(MainActivity.activity), 
          new MyDialogPackage(),
          new SvgPackage(),
          new ReactNativePushNotificationPackage(),
          new ImagePickerPackage(),
          new RNXMPPPackage(),
          new VectorIconsPackage(),
          new CookieManagerPackage(),
          new RNFSPackage(),
		  */
		  new CodePush("JRJ5wPXmdVfpwBxVAIN2PCpWfnca4kh7YmNoM",MainApplication.this,true )
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
