// In this file, we declare various dependencies
// Otherwise Flow errors out because it can't find the modules

declare module 'express' {
  declare module.exports: any;
}

declare module 'compression' {
  declare module.exports: any;
}

declare module 'babel-polyfill' {
  declare module.exports: any;
}

declare module 'react-hot-loader' {
  declare module.exports: any;
}

declare module 'webpack' {
  declare module.exports: any;
}

declare module 'redux-actions' {
  declare module.exports: any;
}

declare module 'react-redux' {
  declare module.exports: any;
}

declare module 'redux' {
  declare module.exports: any;
}

declare module 'immutable' {
  declare module.exports: any;
}

declare module 'isomorphic-fetch' {
  declare module.exports: any;
}

declare module 'redux-thunk' {
  declare module.exports: any;
}
