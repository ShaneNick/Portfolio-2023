import Proj1 from "../assets/Bleachers.svg";
import Proj2 from "../assets/BMK.svg";
import Proj3 from "../assets/greenhouse.svg";


export const ProjectList = [
  {
    name: "Bleachers",
    image: Proj1,
    skills: "Bleachers is a full-stack web application built using technologies such as Node.js, Express, and socket.io. Its primary purpose is to enable users to create chat rooms dedicated to discussing live sports matches. The app utilizes the socket.io library to establish real-time communication channels between users, facilitating instant messaging and updates within the chat rooms.",
    githubLink: "https://github.com/ShaneNick/bleachers",
    deployedLink: "https://bleachers-app.herokuapp.com/",
  },
  {
    name: "Busy Mom's Kitchen",
    image: Proj2,
    skills: "Busy Mom's Kitchen is a website dedicated to providing easy and quick recipes for busy parents. It offers a search bar for ingredient-based recipe searches, a featured 'Recipe of the Day' section, and a newsletter signup form. The website utilizes HTML, CSS, JavaScript, the MealDB API, and the Spoonacular API to deliver a user-friendly experience for meal planning and preparation.",
    githubLink: "https://github.com/ShaneNick/Busy-Moms-Kitchen",
    deployedLink: "https://busy-moms-kitchen-app.herokuapp.com/",
  },
  {
    name: "Greenhouse",
    image: Proj3,
    skills: "Greenhouse is an e-commerce plant store built as a full MERN (MongoDB, Express, React, Node.js) project. It allows users to browse and purchase plants, create an account to track orders and inventory, and list plants for sale. The application utilizes React with React Router for the front-end, a GraphQL API built with Node.js and Express for server-side operations, MongoDB and Mongoose for the database, JWT authentication for user accounts, and Apollo Server to connect the front-end and backend. The codebase follows best practices, including modular components, reusable UI elements, object-oriented modeling, declarative data fetching, environmental variables, and test coverage. The UI is styled with Semantic UI and is responsive across devices. To run the app locally, clone the repository, install dependencies, set up the necessary environment variables, and start the dev server.",
    githubLink: "https://github.com/example/greenhouse",
    deployedLink: "https://greenhouse1-8b73a9b5d931.herokuapp.com/",
  },
];
