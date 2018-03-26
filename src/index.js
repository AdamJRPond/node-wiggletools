import { spawn } from 'child_process'

export const compose = (...args) => args.reverse().reduce((prev, fn) => fn(prev), '')

export const file = file => s => `${file} ${s}`

export const run = s => new Promise((resolve, reject) => {
  console.log(`Spawning wiggle tools process with "${s}"`)
  const cp = spawn(`wiggletools ${s}`, [], { shell: true })
  cp.on('error', e => console.error(e))
  cp.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })
  
  cp.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })
  
  cp.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
    resolve()
  })
})

export * from './unaryOperators'

