# Fund Management - [Angular](https://angular.io)

# Featues
- Fund list
  - Fund card
  - Fund add
- Fund details
  - Dashboard
  - Wallet
  - Flow
  - Status

# App Archteture

- Every features lives in it's own module that is lazy loaded
- We make use of smart-dumb component architecture
- State lives in services with BehaviorSubjects
- App uses [Angular Material components](https://material.angular.io)

# Development server

Run `ng serve` for a dev server and run the command `json-server -- watch db.json` to mock the api for the project. 

Or you can run the command `npm start`, it'll do both.

Navigate to `http://localhost:4200/`.

The app will automatically reload if you change any of the source files.


