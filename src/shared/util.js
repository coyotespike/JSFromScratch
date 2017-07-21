// @flow

// Simple util to test whether we are in production mode
// The linter will complain if we export only one thing
// eslint-disable-next-line import/prefer-default-export
export const isProd = process.env.NODE_ENV === 'production'

