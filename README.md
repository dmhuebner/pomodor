# Pomodor

Pomodor is a simple, time management app that helps you work efficiently while tracking and organizing your work with Timers and  Task Lists.

It includes a **Timer** feature to help you focus and work efficiently as well as a **Task Lists** feature that allows you to create multiple task lists and prioritize tasks by dragging and dropping them into the desired order. 

It uses the [Pomodoro time management technique](https://en.wikipedia.org/wiki/Pomodoro_Technique "Pomodoro time management technique") that encourages incremental bursts of high focus productivity followed by short breaks.

You can change a wide variety of the timer controls in the **Settings** located in the main menu.

#### To Run Locally:

```npm run develop```

#### Building:

Pomodor is a Progressive Web App that runs in the browser but also uses Capacitor and Electron to let you build to both Mac OS and Windows.

If you want to build to Mac OS or Windows you will need to cd into the /electron directory and run:
 
```npm install```

Be sure to cd back out into the root directory of the application before running the build commands below.

Then, you will need to run a build of the app with the --base-href flag for capacitor to use to build the Electron app:

```ng build --base-href ./```

To build to Mac OS or Windows:

```npm run build-electron-mac```

or

```npm run build-electron-win```
