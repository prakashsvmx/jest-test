# jest-test
Simple Javascript Unit Testing setup with Jest

Unit testing setup is a starting point for Anyone willing to learn TDD or adopt TDD in their company or personal Projects.
But getting the basic setup can be tricky. and may not find the correct references. while boiler plates can provide a good start, 
it is necessary to understand the basics.

#Steps:

### Create empty package.json file to start with. then, ####

#####1. install jest globally or project locally as a dev dependency (preferred global)
```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

#####2. Add babel config to transpile

//babel.config.js

```module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
};
```

#####3. Add NPM Scripts for running tests and coverage. in package.json
```
{
  "scripts": {
    "test": "jest",
    "cov": "jest --coverage"
  },
  "devDependencies": {
    "@babel/core": "^7.7.5",
    "@babel/preset-env": "^7.7.6",
    "babel-jest": "^24.9.0"
  }
}

```

#####4. Add first test file (index.test.js)
```
//index.js
import sum from './index';

describe('Sum Function tests', ()=>{

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('2+3=5',()=>{
    expect(sum(2,3)).toBe(5);
  });

});

```

#####5. Add first implementation file (index.js)
```
function sum(a, b) {
  return a + b;
}

export default sum;

```

#####6. `npm run test` - to test the sum function

#####7. `npm run cov` - to verify the code coverage.
