This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and styled with [`material-ui`](https://github.com/mui/material-ui) using [this tutorial](https://dev.to/hajhosein/nextjs-mui-v5-typescript-tutorial-and-starter-3pab).

## Getting Started
First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests
To run the Unit and Snapshot tests can be run using:

```bash
npm run test
```

## Technical decisions
This project provided a lot of room to tackle different technical challenges, I will explain my decision for each topic below.

### Next.js
Since the project required both backend and frontend to be implemented, I decided to use Next.js, since I could do both in a monorepo for an easy deliverable project.

The backend contains two API endpoints, one to fetch all the users and one to fetch the total number of users in the provided JSON file. The second API is a bit quirky and I only implemented it because I wanted to have some parts of the users rendered in the server side, so they will already be in the first HTML to be rendered even before to javascript kick-in, but I also wanted to be complient with the requirements of the excersice, which is to have an API and load the data dynamically from the frontend, so my idea was to implement a "Load More" button, which shows up only if all the users are not loaded already.

### Clients list and details
For the clients list I used the List from Material UI, which it has a really nice API and look to it, and I wanted to use some sort of accordian for the user details, but this wouldn't be complient with the requirements of the exercise, which was to show the avatar in full size, and since the avatar is already displayed in the list, it made sense to me to show the user details in a modal.

### Debounce input
The search input I'm using the debounce technique, which is the technique to have a function that will be called after a certain time passed after an event occurs.

This is great for search inputs, because we don't want to call a function for every keystroke that the user makes, it's best to way for them to finish typing to them execute our filter function.

For the "debouncer" wrapper I decided to go with `lodash/debounce`, which is a popular library for such techinique. Of course, it's also possible to create a simple debounce function like I did in my [Top-Down React Phaser Game Template project](https://github.com/blopa/top-down-react-phaser-game-template/blob/b69731b62b64258720dbe9fc0a841829a75109cc/src/Game.jsx#L170).

### Memoization
To avoid unecessary re-render, I'm using `React.memo` and `useCallback` in some components, which will compare the props passed to a component and avoid re-rendering it if these props are still the same. Since objects and functions are compare by reference in Javascript, it's also necessary to use `useCallback` and `useMemo` to make sure the reference integrity stays the same when passing variables down the components tree.

The `BasicModal` doesn't have a memoization is it because since it receives a children, it would be needed to memoiza that children too before passing it down to the component, and since the modal won't face any re-renders due to data being changed, I decided to leave it as is, because memoizing the children would make the code less readable in my opinion.

### Theme
As systems designs are more and more becoming a market standard for companies, I decided to use Material UI as the UI library for this project. It not only provides a great variety of React components, but it also has really nice looking visuals, at least for me as an Android user.

Material UI is also my to-go UI library for personal projects like [my blog](https://pablo.gg/) or [Resume Builder](https://resume-builder.js.org/).

### Testing
For the tests I decided to use Jest and React Testing Library because it's another set of testing libraries that are pretty much market standards, and it's the one I use at my current company.

### Linting
For linting I'm using my personal eslint settings, which I carry along to all my projects, to keep code consistancy everywhere I code.
