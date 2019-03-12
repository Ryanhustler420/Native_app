## Native App

> Requirement [Make Sure You Are Not Running ng serve Command Anywhere When Installing @angular/cli]

- Nodejs

- Angular CLI
  - npm install -g @angular/cli

> Initialize an app

- ng new ng-refresher

##### [Native Script Installation Process](https://docs.nativescript.org/angular/start/quick-setup#quick-setup)

> install nodejs
> npm install -g nativescript
> install Android Studio
> install jdk (atleast 8.x) [run below command it will ask you for the jdk installation]
> @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://www.nativescript.org/setup/win'))" (Run as Administrator)

1.  Answer in sequence
    - y
    - y
    - y
    - y

> check setup with command **tns doctor**
> create project with command **tns create**
> go to project directory and run **tns run android --bundle**

`open xcode on mac and open project folder and select 'platforms' folder and than run emulator. you can stop xcode after emulator starts. than run below command.`

> go to project directory and run **tns run ios --bundle** [run xcode for mac]

`open Android Studio on Windows/Mac and open project folder select 'platforms' folder and than run emulator. make an AVD and run that emulator on PC/MAC. and than hit command given below on cmd`

> go to project directory and run **tns run android --bundle**


## Angular CLI in Action

##### Create Component With Angular CLI

> ng g c layouts/stack
> ng g c layouts/flexbox
> ng g c layouts/grid
> ng g c layouts/absolute
