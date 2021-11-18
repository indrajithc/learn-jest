# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learning

**global test**
- two args
  - string description // test identifier
  - test function
- no error test passes
  -  empty test should pass

**TDD**
- test driven development
  - tet before write code
  - often called red-green
    - initial fail [red] then code the solution [green]
      - initial empty function
      - test code
      - test fail [red]
      - wite code in function
      -  test success [green]
  - Why TDD
    - part of coding process
    - more efficient
      - every time make a change test it by already written test code
- Unit Test
  - isolated test
    - only test a function
- Integration Test
  - multiple units work together
  - interaction between components / different micro services
- Functional testing
  - tests a particular functionality 
    - test the function behavior      
  - general behavior of the software 
    - form filling and submit test behavior 
      - invalid form entry showing error can be unit testing and also be a functional testing

- Acceptance / End-to-end [E2E] test
  - actual browser test with sever 

**Functional testing vs Unit testing** [ section 1:7]
- Unit testing
  - isolated 
    - mock all dependencies
      - easy to identify the failed test 
      - easy to pinpoint failure [know where to look]
      - les tightly coupled  
      - more likely to break with refactoring 
        - small change test might fail but software still working as expected [ con]
- Functional testing
  - Different mindset
  - Particular behavior or user flow
  - close to user flow
  - tests are robust
    - as log as the behavior stays it will pass
  - difficult to pinpoint the failure section  

**TDD vs BDD**
- BBD
  - user behavior / behavior testing
  - explicitly defined 
    - includes QA , client etc

**Accessability**
- https://testing-library.com/docs/queries/about/#priority
- Priority
  - Query accessible to everyone
    - getByRole
    - getByLabelText
    - getByPlaceholderText
    - getByText
    - getByDisplayValues
  - Sematic queries
    - getByAltText
    - getByTitle
  - TestIds
    - getByTestId
- Role
  - https://www.w3.org/TR/wai-aria/#role_definitions
  

**Linter and Formatter**

- **Linter**
  - analyzes static text 
    - basic errors
- **Formatter**
  - formatting the code
    - indentations 

**ESLint Prettier**
- eslint plugin rules 
