# Anim'pedia

![Anim'pedia_header](https://user-images.githubusercontent.com/65663844/150816930-c0497c61-aab2-42c6-a516-c1b4f55f27b9.JPG)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Create folder with:

`npm init react-app anime-app`

### Push an existing repository from the command line:

```git remote add origin https:github.com/Caro-L-dev/Anime-app.git```  
```git branch -M main```  
```git push -u origin main``` 


### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### How to set Environment Variables


* `$ npm install react-dotenv`
* Create a `.env` & `.env.template` files.
* Put `.env` in `.gitignore` file.
* Then put `const yourUrl = window.env.OMDb_API_KEY;`
* Don't forget to restart the server when the `.env` is modified.


### Dependencies

#### Axios

Axios is a simple promise based HTTP client for the browser and node.js.  
Axios provides a simple to use library in a small package with a very extensible interface.
