import { run, compose, scale, file } from '../src'

const program = compose(
  scale(1.5),
  file('../../NGS\\ Test\\ Files/BigWigTester.bigWig'),
)

run(program)
    .then(() => console.log('Complete.'))
