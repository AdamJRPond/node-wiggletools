import { run, compose, scale, file } from '../src'

const program = compose(
  scale(1.5),
  file('../test-files/BigWigTester.bigWig'),
)

run(program)
    .then(() => console.log('Complete.'))
