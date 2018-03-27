# node-wiggletools

This is a proof of concept API wrapper for wiggletools.

## Installation

1) Clone the repo: `git clone git@github.com:AdamJRPond/node-wiggletools.git`
2) Enter the folder: `cd node-wiggletools`
3) Install dependencies: `yarn` or `npm i`

## Running

Run `yarn test` to run the test file. This file currently just runs `scale 1.5` on the included test file. You can alter this file to try out different operators. If this package is released as a node module, then you could `import { whatever } from 'node-wiggletools'` and use it in your own scripts

## Example usage
```javascript
import { run, compose, scale, file } from '../src'

const program = compose(
  scale(1.5),
  file('../test-files/BigWigTester.bigWig'),
)

run(program)
  .then(() => console.log('Complete.'))
```
## Roadmap

- Export functions so that this can be used as a node module
- Return the result in the promise returned from `run(program)`
- Write a RESTful web service
- Create a Docker image that could be used on the command line or over REST
