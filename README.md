# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

- 

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person
- tip and total will be reset automatically while any of the left side content will be updated by empty value

### Screenshot

![Home Screen](/public/homescreen.png?raw=true "Home Screen")


### Links
- Live Site URL: (https://amidholakiya.github.io/tip-calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html)
- [bootstrap](https://react-bootstrap.github.io/) - For styles


### What I learned

Most of the time I deployed React and NodeJS application on **EC2** as per the client requirements. But I have used **Github Pages** for this project. I followed one tutorial link which is already stated in [Useful resources](#useful-resources). Only few steps to follow and your application will be deployed within few minutes.

### 1. install gh-pages in project

```shell
 $ npm i gh-pages --save
```

### 2. Add Homepage in **package.jcon**

 ```diff
    {
      "name": "my-app",
      "version": "0.1.0",
    + "homepage": "https://gitname.github.io/react-gh-pages",
      "private": true,
 ```
 
### 3. Scripts to deploye project
```diff
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
 ```
### 4. Push the source code in Github Repository

### 5. Push React App into the Github Repository
```shell
 $ npm run deploy
```

### 6. Configure Gitpages
- Goto **GitHub Pages** settings
  > github **project repository** (in my case https://github.com/AmiDholakiya/tip-calculator-app-main) -> **Settings** -> **Code and Automation** -> **Pages**
- Update the **Source** and **Branch** Values
  > 1. **Source** -> `Deploy From Branch` 
  > 2. **Branch** -> Branch : `gh-pages` Folder: `/ (root)`

### Useful resources

- [TypeScript Resource](https://www.typescriptlang.org/docs/handbook/react.html) - This link helped me to resolved typescript error in redux-toolkit
- [Project Deployement in GithubPages](https://github.com/gitname/react-gh-pages) - This is an amazing short tutorial in which every steps are described in very detailed. I recommended this link for Application beploye in githubpages without error.

## Author
- LinkedIn - [Ami Dholakiya](https://www.linkedin.com/in/ami-dholakiya-046247181/)

## Acknowledgments