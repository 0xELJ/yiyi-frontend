# YiYi (Frontend)

YiYi allows you to instantly connect with your friends in rooms through an easy to use messaging service.

![Showcase](showcase.png)

## Introduction

This repository contains the Frontend development of YiYi, which is a mobile application for Android and iOS.

Follow the instructions below to obtain a copy of the project and run it on your computer for development or evaluation tests.

### Requirements

The project's development environment is configured to be used with *Yarn* and *Expo CLI*. To use a development environment it is necessary to have:

```
* Node.js v12.13.0^
* Yarn 1.19.1^
* Expo CLI 3.18.6^
```

Additionally, it is necessary to install and run the YiYi Backend. [Access the Backend repository](https://github.com/0xELJ/yiyi-backend) for more information about its installation and execution.

## Installation

First, you need to get the project repository. If you have any version of *git*, clone the repo with:

```
$ git clone https://github.com/0xELJ/yiyi-frontend.git
```

Once obtained the project repo, must be installed the required dependencies to run the development environment:

```
$ yarn install
```

At the end of the installation, the environment will be ready to be run. Also, it's possible to change the environment variables by opening and editing the [.env file](.env).

### Execution

To start the local development server with Expo CLI, type the following command:

```
$ yarn start
```

*Expo CLI* starts *Metro Bundler*. It also pops up *Expo Dev Tools*, a graphical interface for *Expo CLI*.

Now, it's possible to open the project on multiple devices simultaneously through *Expo Client*. Go ahead and try it on an iPhone and Android phone: 

* On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal or in Expo Dev Tools.

* On your Android device, press "Scan QR Code" on the "Projects" tab of the Expo client app and scan the QR code you see in the terminal or in Expo Dev Tools.

## Tech Stack

* [Typescript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Reselect](https://github.com/reduxjs/reselect)
* [React Bootstrap](https://react-bootstrap.github.io/)


## Author

* **Enrique López Jiménez**
