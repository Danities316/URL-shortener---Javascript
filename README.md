# URL Shortener using Javascript and nodejs

I build this project with the intention of using it personally, i discovered I used online URL shorterner online ofter, so i decided to build my own using vanila Javascript and Nodejs(I am planning to turn this to a chrome extension).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
Create a URL shortener using Nodejs, express-handlebar, mongoose, uuid, axios and Vanilla javascript  to allow users shorten a lengthy url into something short.


### The challenge

My challenge was to build out this url shortener app in order to understand hashmap in javascript, understand mongoDB better and to build something i can use
- Integrating the mongoose on my local mchanine took me to many stock overflow pages and other web blogs
- Got to use the url-exist npm for the first, even though it is a straight forward module, it was tasking

## ScreenShot
![ss](https://user-images.githubusercontent.com/12422620/236650566-bafc3721-98aa-4a96-a1ef-b48cda89a5ea.png)

![ss2](https://user-images.githubusercontent.com/12422620/236650578-7eb5d66d-3e51-4fcf-9c8f-90cf875dd241.png)



## ScreenShot Result



### Links

- Solution URL: 
- Live Site URL: https://urlshortener-6fvo.onrender.com

## My process
- Create a backend where i create logic for the API
- I used mongoose for the database and model
- use url-exist to validate url
- I simply fetch google book API data using **Axios**, creat an in-memory key-value pairs to save it on the local browser for faster loading.
- Deploying the project to Heroku - I have to understand the steps and process ofhosting an in-memory database online

### Built with
- Semantic HTML5 markup
- Boostrap 5
- express
- Express-handlebars
- Redis
- Google Books API

### What I learned
- Fetching API data and manipulating them
- How to use Redis, it functionalities and methods
- Deep understanding of How Google Books API works
- How to create mobile-first projec
- Deploying Redis project to either Heroku or any other cloud base services


### Continued development
- I would like to create modularity in the file structure -  following webpack standard
- I would like to create user registration/login
- track url clicks etc
- add url customization
- Add geotargeting and device targeting

### Author
- [Danities Ichaba - Linkdin](https://www.linkedin.com/in/danities-ichaba-50a806171?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bww5hjSUjT%2BCSaJSXADphiQ%3D%3D)
- [Danities Ichaba Twitter](https://twitter.com/danitiestech)
- [Danities Ichaba Hashnode](https://hashnode.com/@Danities)
Twitter - @danitiestech



