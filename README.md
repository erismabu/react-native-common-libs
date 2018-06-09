
# react-native-common-libs

## Getting started

`$ npm install react-native-common-libs --save`

### Mostly automatic installation

`$ react-native link react-native-common-libs`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-common-libs` and add `RNCommonLibs.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCommonLibs.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNCommonLibsPackage;` to the imports at the top of the file
  - Add `new RNCommonLibsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-common-libs'
  	project(':react-native-common-libs').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-common-libs/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-common-libs')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNCommonLibs.sln` in `node_modules/react-native-common-libs/windows/RNCommonLibs.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Common.Libs.RNCommonLibs;` to the usings at the top of the file
  - Add `new RNCommonLibsPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNCommonLibs from 'react-native-common-libs';

// TODO: What to do with the module?
RNCommonLibs;
```
  