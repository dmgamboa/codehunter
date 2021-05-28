

<p align="center">
    <img alt="codehunter logo" src=".\client\public\codehunter-logo.png">
</p>

<p align="center" style="font-weight: bold">
    CODEHUNTER
</p>

## **Table of Contents**
* [General info](#general-info)
* [Setup](#setup)
* [Technologies](#technologies)
* [Contents](#content)
* [Citations: pictures, libraries, API's etc.](#citations);

***
## ✨**General Info**
A scavenger hunt app designed to encourage tourism and exploration in the city of Vancouver. Our aim is to help the people of Vancouver explore what British Columbia has to offer and support local businesses hit hard by the pandemic (2020).
### Features
* Add your friends and people you meet along the code hunting journey.
* See a list and map view of locations with hidden QR codes.
* Once you find these QR codes you can scan them with our app which will grant you points.
* Use these points to redeem rewards sponsored by our partners (support local small to large size businesses).

#### *Check out our video below.*

<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="codehunter video" width="240" height="180" style="display: block"/></a>

***
## 📦 **Setup**
1. Git clone our repository
2. In a new branch, do the following...
3. Run **npm install** to install dependencies
4. Add our .env.local file to the client folder (includes api keys)
5. Add our .env file to server folder (includes api keys)
6. Change directory to client and run **npm start**
7. Change directory to server and run **npm run dev**

***
## 👨‍💻 **Technologies**
Technologies used for this project:
* JavaScript/HTML/CSS
* Nodejs
* React 
* Lodash
* Heroku and Vercel
* Ant Design
* Multer
* Visual Studio Code
* Selenium IDE

### Third Party APIs
* HTML5 GeoLocation API
* Google Maps API

### Database Related Technologies
* MongoDB
* Firebase
* Amazon Simple Storage Service

### VSCode extensions
* ESLint publisher"Dirk Baeumer"

### Other
* Flat Icons
* Unsplash

***
## ✏️ **Testing History**
Automated testing performed by Selenium IDE
<a href="https://docs.google.com/spreadsheets/d/1QuMZohZ4OqHskKSqTsVvwNvOB3deYw7iLcbWxDl5DTo/edit?usp=sharing">View testing history</a>
***
## 🏕️ **Content**
Brief overview of the most important contents of the project folder:

```
 Top level of project folder: 
├── client                                  # Frontend of our application
├── server                                  # Backend of our application
├── node_modules
├── package-lock.json
└── README.md


It has the following subfolders:
client
├── .node_modules                                     
├── public                                  
├── src                                      # Folder for common HTML elements
    ├── assets                               # Contains images and icons used throughout the application
    ├── components                           # Contains common components use throughout the application
    ├── context                              # Contains authentication, the routing of urls, and themes
    ├── pages                                # Contains the various pages of our applications
    ├── util                                      
/.env.local                                  # Contains environment variables used on the frontend
/.eslintrc.js                                # Contains the rules for consistent code format
/.gitignore                                  

server
├── api-routes                               # Handles the routing for api calls                                # 
├── config                                   # Environment variable configurations and image storage service 
├── node_module                                    
├── utils
/.env                                        # Contains environment variables used on the backend
/.gitignore
/server.js                                   # Entry point of our application


```
***
## 🌎 **Citations**
[React](https://reactjs.org/) (JavaScript Library) v17.0.2 by Jordan Walke (original author), Facebook, and community (developers)  [MIT License](https://opensource.org/licenses/MIT)

[Ant Design](https://ant.design/) by community [Creative Commons Attribution 4.0 International Public License](http://creativecommons.org/licenses/by/4.0/)

[Axios](https://github.com/axios/axios) v0.21.1 by @emilyemorehouse, Matt Zabriskie, Nick Uraltsev, and community (developers) [MIT License](https://opensource.org/licenses/MIT)

[ESLint](https://github.com/Microsoft/vscode-eslint) v2.1.10 by Dirk Baeumer and community (developers) [MIT License](https://opensource.org/licenses/MIT)

[Selenium IDE](https://www.selenium.dev/selenium-ide/) v3.17.0 by community (developers) [Apache License 2.0](https://github.com/SeleniumHQ/selenium-ide/blob/trunk/LICENSE)


[Frog photo on About Us page](https://unsplash.com/photos/DCelW4ytxfM) by David Clode @davidclode [Unsplash License](https://unsplash.com/license)

[Fox photo on About Us page](https://unsplash.com/photos/mEdKuPYJe1I) by Alexander Andrews [Unsplash License](https://unsplash.com/license)

[Goose photo on About Us page](https://unsplash.com/photos/HoV6CTICUHc) by Kaja Reichardt @kajareichardtphotos [Unsplash License](https://unsplash.com/license)

[Mountains on About Us page](https://unsplash.com/photos/y2azHvupCVo) by Eberhard Grossgasteiger @eberhardgross [Unsplash License](https://unsplash.com/license)

[Tiger on About Us page](https://unsplash.com/photos/_54TF64ad9M) by Kevin Woblick [Unsplash License](https://unsplash.com/license)

<div>Icons made by 
<a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
</div>