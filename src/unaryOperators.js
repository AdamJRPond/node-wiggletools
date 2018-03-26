export const unit = s => `unit ${s}`
export const coverage = s => `coverage ${s}`
export const write = output => s => `write ${output} ${s}`
export const write_bg = ouput => s => `write_bg ${ouput} ${s}`
export const smooth = int => s => `smooth ${int} ${s}`
export const abs = s => `abs ${s}`
export const exp = s => `exp ${s}`
export const ln = s => `ln ${s}`
export const log = float => s => `log ${float} ${s}`
export const pow = float => s => `pow ${float} ${s}`
export const offset = float => s => `offset ${float} ${s}`
export const scale = float => s => `scale ${float} ${s}`
export const gt = float => s => `gt ${float} ${s}`
export const lt = float => s => `lt ${float} ${s}`
export const defaultVal = float => s => `default ${float} ${s}`
export const isZero = s => `isZero ${s}`
export const extend = int => s => `extend ${int} ${s}`
export const bin = int => s => `bin ${int} ${s}`

// Or.. generic approach
// export default ["unit", "coverage", "write", "write_bg", "smooth", "abs", "exp", "ln", "log", "pow", "offset", "scale", "gt", "lt", "defaultVal", "isZero", "extend", "bin"]
//  .reduce((acc, f) => ({
//      ...acc,
//      [f]: (...args) => s => `${f} ${args.join(' ')} ${s}`,
//  }), {})
