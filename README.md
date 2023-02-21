# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/snip1.jpg)
![](./images/snip2.jpg)


### Links

- Solution URL: https://github.com/jenmurph4610/interactive-rating-component.git
- Live Site URL: https://jenmurph4610.github.io/interactive-rating-component/


## My process

### What I learned

I started this project a while ago and had the HTML and CSS done for some time.  I got stuck on the Javascript portion, when upon submitting of my rating, the page would show my thank you message but then revert back to the rating screen so I would only see the thank you message briefly.  I was frustrated at the time and left it for a while, and coming back to it today I was able to find the solution fairly quickly.  I have to say the main thing I learned was how simply stepping away for a bit can actually be very helpful.  Maybe not for months next time :) but coming back with a fresh set of eyes and without the built up frustration was key.  

In relation to the actual problem I was having, I learned that the submit input type would refresh the page by default.I have included links to the Stack Overflow pages where I found the problem and solution.

### Useful resources

- https://stackoverflow.com/questions/52213/browser-refresh-behaviour 
- https://stackoverflow.com/questions/1878264/how-do-i-make-an-html-button-not-reload-the-page

  These are related, but I included both because I used a solution from the first, but the second had some explinations I found helpful. They helped me with how to stop the page from refreshing after using the submit button. I used the accepted answer on the first of adding the autocomplete attribute to the form element.

## Author

- Frontend Mentor - [@jenmurph4610](https://www.frontendmentor.io/profile/jenmurph4610)
- GitHub - [@jenmurph4610](https://github.com/jenmurph4610)