package com.reactapp;

import android.app.Application;
import android.util.Log;
import com.horcrux.svg.RNSvgPackage;
import com.facebook.react.ReactApplication;
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

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
	      //new PDFView(), // <------ add here
          new MainReactPackage(),
        
          new ReactNativePushNotificationPackage(),
          new RNSvgPackage(),
          new RNXMPPPackage(),
          new VectorIconsPackage(),
          new PDFView(),
          new CookieManagerPackage(),
          new RNFSPackage(),
          new PDFView()
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
