// export default {
//   output: {
//     comments: 0
//   },
//   compress: {
//     unused: 1,
//     warnings: 0,
//     comparisons: 1,
//     conditionals: 1,
//     negate_iife: 0, // <- for `LazyParseWebpackPlugin()`
//     dead_code: 1,
//     if_return: 1,
//     join_vars: 1,
//     evaluate: 1
//   }
// };

module.exports = {

  output: {
    comments: false,
  },
  mangle: {
    screw_ie8: true,
  },
  compress: {
    unsafe_comps: true,
    properties: true,
    keep_fargs: false,
    pure_getters: true,
    collapse_vars: true,
    unsafe: true,
    warnings: false,
    screw_ie8: true,
    sequences: true,
    dead_code: true,
    drop_debugger: true,
    comparisons: true,
    conditionals: true,
    evaluate: true,
    booleans: true,
    loops: true,
    unused: true,
    hoist_funs: true,
    if_return: true,
    join_vars: true,
    cascade: true,
    drop_console: true,
  },
  // ,sourceMap:true

};
