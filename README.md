📱 React Login and Posts Viewer App

This project is a simple React application built with Create React App.
It demonstrates authentication, API data fetching, navigation, and responsive UI using React Router and Material UI.

🚀 Project Functionality
🔹 Login Page

A simple login form where users enter their phone number (must start with “+254”).

On successful login, the phone number is saved to localStorage, and the user is redirected to the Main Page.

If the user’s phone is already saved, they are automatically redirected to /main.

🔹 Main Page

Displays a list of posts fetched from a public REST API (https://jsonplaceholder.typicode.com/posts).

Includes a search bar for filtering posts dynamically.

Shows the logged-in user’s phone number and a Logout button (which clears localStorage).

Clicking a post navigates to the Detail Page for more information.

🔹 Detail Page

Displays the title and body of a single post based on its ID from the URL.

Includes a Back to Main button to return to the post list.

🧠 Technologies Used

React.js (Functional Components)

React Router DOM – for navigation

Material UI – for responsive UI components

Axios – for API requests

LocalStorage – to maintain user session

🧩 Available Scripts

In the project directory, you can run:

npm start

Runs the app in development mode.
Open http://localhost:3000
 to view it in the browser.

npm test

Launches the test runner in interactive watch mode.
(Currently, basic test setup is included. Full testing will be added after learning React Testing Library.)

npm run build

Builds the app for production to the build folder.

🧪 Testing (Planned)

I’m currently learning React Testing Library and Jest to implement unit and component tests.
Testing will be added once the testing process is fully understood and verified.