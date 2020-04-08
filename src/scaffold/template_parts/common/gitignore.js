module.exports =  () => ({
    file: '.gitignore',
    content: `\
## npm
/node_modules/
**/node_modules/**
/npm-debug.log
node_modules/
node_modules

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

## temp folders
/.tmp/

/.idea
.idea
.idea/
.idea/**
**/.idea/**

# testing
/coverage

yarn.lock
package-lock.json
`
})