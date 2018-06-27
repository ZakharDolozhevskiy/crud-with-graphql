# Users management application

The application written with React and Appolo client (GraphQL)

* [Get started](#get-started) – How to launch application
* [Development](#development) – Development notes
* [Tests](#testing) - Testing notes

## Get started

**You’ll need to have Node >= 6 on your machine**

1. Clone the repository

```sh
git clone https://github.com/ZakharDolozhevskiy/crud-with-graphql.git
```

2. Install dependencies
```sh
npm install
```

3. Run the app in development mode
```sh
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Development

All development dependencies and used script described here

### Scripts

* `npm start` - run application in development mode with live reloading and dev warnings in console
* `npm test` - run tests (patterns: *.test.js, tests folder)
* `npm build` - create production ready build

### Main dependencies

* [React](https://reactjs.org/)
* [React-Appolo](https://www.apollographql.com/docs/react/api/react-apollo.html)
* [Styled components](https://www.styled-components.com)

## Testing

React components covered with unit tests. Snapshots created for reusable components
and components with GraphQL queries and mutations tested as one group.

### Testing tools

* [Enzyme](http://airbnb.io/enzyme/)
* [React-Appolo testing tools](https://www.apollographql.com/docs/guides/testing-react-components.html)
