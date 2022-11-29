# Coding challenge solution

The challenge was to create a single page application that presents a list that shows all the Star Wars films

### [StarWars API](https://swapi.dev/)

### The challenge

- To create a single page application that presents a list that shows all the Star Wars films
- Clicking on an item/film shows a new view of other details
- Create something simple, user friendly and eye appealing
- Deliver the code using GitHub
- Show skills with React
- **Bonus** Deliver the exercise with a readme file

My focus was on:

- Simple, beautiful layout

  Before coding, I sat down and made a drawing of the layout that would work on mobile screens as well as desktop screens. The detail page has a lot of data: the title, movie crawl text, year, and then the related data like planets, characters, species, etc, and let's not forget the different movies. In order to display these options and data in a way that the user can manage I implemented sideways scrollbar switchers (Netflix style) so the user can select which movie and category details they want to see. In order for users to get excited about the movie I animated the opening crawl!

- Showing new view for details

  In my recent projects, I worked with Next.js, which has a built-in routing system. Since the requirements mention a new view for the details and using a SPA (not a backend framework) I decided to use React Router (which I have not used before). In the end, I implemented the different views with nested routes and the `<Outlet />` component.

- Loading data efficiently API

  The related data is not loaded when requesting a film from the StarWars API. Instead, you get an array of URLs. In my first version, I loaded all related data with a loop and Promise. All, but that made the app load quite slowly. In version 2 I used a separate loader (from React Router) for categories and fetch 1 array of related data when the user selects that category.

- Delivering step by step

  I decided to build my APP step by step. This way I quickly had a working version for users or to demo to a client. I made 3 versions each with a seperate Pull Request:

  - [Version #1: ](https://github.com/LovelyFox-code/star-wars/pull/1) Initial layout, fetching data, routing
  - [Version #2: ](https://github.com/LovelyFox-code/star-wars/pull/2) Nested routes, loading categories seperately, added loading spinner
  - [Version #3 ](https://github.com/LovelyFox-code/star-wars/pull/3) Adding (some) tests and a readme
  - [Version #4 ](https://github.com/LovelyFox-code/star-wars/pull/4) Tests fix
  - [Version #5 ](https://github.com/LovelyFox-code/star-wars/pull/5) Implement filter input

### Screenshot so far!

![Preview image](/src/index-page-preview.png)
![Preview image](/src/detail-page-preview.png)

### Built with

- Create [React](https://reactjs.org/) APP
- React Router
- React Hooks
- Module CSS
- Flex-box
- Mobile-first workflow

### How to use it:

- clone repository to your local folder `git clone https://github.com/LovelyFox-code/star-wars`
- install dependencies `npm install `
- write on your terminal window `npm start`
- to test it split your terminal and run `npm test`
- enjoy exploring

### Still TODO

- [ ] make separate view to view each item from category(each character, species and etc)
- [ ] write more tests for components
- [ ] make more efficient layout for desktop, because on desktop we could display more data at the same time
