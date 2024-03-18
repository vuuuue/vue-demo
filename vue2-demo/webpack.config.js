

if (process.env.NODE_ENV === 'production'){
  module.exports = {
    externals: {
    }
  }
} else {
  module.exports = {}
}