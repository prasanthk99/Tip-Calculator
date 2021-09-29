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
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./images/screenshot.jpg)


### Links

- Solution URL: (https://github.com/prasanthk99/Tip-Calculator)
- Live Site URL: (https://dazzling-euler-3ee004.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```html
<button class="rbtn"  onclick="reset()" Disabled>RESET</button> 
```
```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 3px;
}

input[type=number] {
    -moz-appearance: textfield;
}

```
```js
if(bin!=""&&pin!=""){
    var restbtn =  document.querySelector(".rbtn");
    restbtn.classList.add("rbtnafterenable");
   
    restbtn.removeAttribute("Disabled");
    restbtn.setAttribute("Enabled","");
}
    
```

### Continued development

I need to more focus on animation usinh javascript in future projects. 

### Useful resources

- [StackOverflow](https://stackoverflow.com/) - This helped me to know, how to remove spin button in number input. I really liked this pattern and will use it going forward.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference) - This helped me to do some behaviour to my Website using javascript.

## Author

- Frontend Mentor - [@prasanthk99](https://www.frontendmentor.io/profile/prasanthk99)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
