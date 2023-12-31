Live Site can be accessed here: https://concert-search.netlify.app

## About

This project was a deliverable for the Per Scholas Software Engineering course. Our objective was to create a web application using React and any API of our choosing to fetch data. My project uses the Ticketmaster API so users can browse for concerts by the artist's name and can filter results by city.

## Technologies

Built using React + Vite, JavaScript, HTML, and CSS.

## How to Navigate

Users can search for a concert by inputting the artist's name in the input field then selecting the 'Search' button to see all results. Or they can also input the city if they'd like to narrow down the search. If a result exists, the user will be redirected to the results page where they can view all concerts that the artist will be performing in. Additionally, they can "reserve" tickets if they like, by selecting the 'Buy Ticket' button. This will redirect them to the checkout page (no purchases can be made).

If there are no concerts for that particular artist or that artist in a particular city, the user will see no results.

## Installation Instructions

1. clone repository
2. Navigate to folder and open on local machine
   - cd into folder
3. Create new React project: `npm create vite@latest .`
   - Select framework: React
   - Select output: JavaScript
4. Install: `npm install`
5. Start server: `npm run dev`

## Further Improvements

-I'd like to add a sidebar to the results page of concert recommendations to display other concerts that match the genre of the initial search, so fans don't miss out on other performances.

-Improve the display of performers on the homepage.. I'd like to have 3 performers displayed at a time and have the buttons be used to bring 1 performer in to view and the other 2 would be half-hidden.

-Limit results to music festivals (I noticed sports events, comedy shows, etc come up)

## Resources:

-MDN for all things

-Date sorting in the Results component: https://forum.freecodecamp.org/t/how-to-format-these-dates-and-sort/453354/2

-Using state to flip through images in Form component: https://www.shecodes.io/athena/17570-how-to-set-a-variable-as-the-source-of-an-image-in-react-js

-Inputs in Help component: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable

-Environment Variable: https://dev.to/orama254/how-to-use-environment-variables-in-vite-react-template-example-34ff

-Pass props via Links: https://ui.dev/react-router-pass-props-to-link

-Day of the week: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay

## Acknowledgements:

-Thank you to my instructors Tishana Trainor, Manara Ali and Kasper Kain for teaching us the foundation needed to build a React application

-Special thanks to Manara for showing me optional chaining! Without this, my application would not load the data every time because the component rendering would often happen before the data was retrieved.

-Thank you to my classmates Owusuduah Achamfour and Mark Soro for their help with deploying my project
