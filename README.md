# Sample Setup for Mac based Development of UWP Apps

## Environment Setup
We will be using the Parallels 12 VM with Windows 10 installed. So let's start with setting up our Mac with those. 

### Mac Setup

* Download the trial version of [Parallels 12](http://trial.parallels.com/?lang=en&terr=us) 
* Use the defaults in setting up:
  * It is recommended to use more than 40G hard-drive setup. If you need to change the drive size later, you need to first change it in the VM Config menu of Parallels, restart Windows and then within the Windows OS, search for Disk Management and select the "Create and Format Disk Partitions" options to launch the disk management app. From there you can right click on the existing drive and expand it to include the newly added volume.
  * Make sure you are using the Shared Networking option.
* You can download [Windows 10](https://www.microsoft.com/en-us/software-download/windows10ISO) ISO image and use it when setting up your VM.
* For development [VSCode](https://code.visualstudio.com/) is recommended.
* This sample uses [npm](https://www.npmjs.com/), [React](https://facebook.github.io/react/), [Webpack](https://webpack.github.io/), and [manifoldjs](http://manifoldjs.com/). 
  * It is also recommended to use the [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) to serve the files.
  * It is also recommended to install the above globally so that they are in your call path. (using -g flag in ``npm install``) 

### Windows Setup
* In order to run the UWP app we will be building, we need to install [npm](https://www.npmjs.com/) and [manifoldjs](http://manifoldjs.com/) on this Windows machine as well.
* You will also need to install[ Windows10 SDK](https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk).

## Project Setup
In this section we will setup how you configure this project after you clone it to your machine.

### Download and Build the Project
* The setup here is inspired from the this Typescript blog post named [React & Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html).
* First run ``npm install`` command in the root of the project to download and install dependencies in the package.json file.
* Build it using the ``webpack`` command in the root of the project. This will create a dist folder.
* You can now serve this sample through localhost by running in the root of the project. Make a not of the port and http address this is serving from. It will be something like http://localhost:8080/webpack-dev-server/

        webpack-dev-server --content-base

### Create the Windows 10 Manifest file

Go to Sharing Panel in the Settings App. In that panel, note down the shared name of your machine. In my case this was kerem-macbook.local. You will need to use this as the local web server domain name. Open up the manifest.json file and edit that to point to your computer name in start_url and scope properties. And also make sure that the URL point to the webpack-dev-server namespace. For example

        http://kerem-macbook.local:8080/webpack-dev-server/index.html

To create a manifest file, please run:

        manifoldjs -m "manifest.json" -p windows10

The above will create a folder names TestApp (based on the manifest.json file). 

### Setup the Windows 10 UWP app

Once this folder is created copy this folder to your Windows VM. Notice that this needs to be copied to the local drive of the VM and not any of the shared volumes, for this to work otherwise manifoldjs tool complains when you try to run it.

On the windows VM, open up the command prompt, cd into the folder TestApp and run below:

        manifoldjs run windows10

