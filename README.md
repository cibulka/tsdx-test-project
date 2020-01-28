
Hello world project to test [jaredpalmer/tsdx](https://github.com/jaredpalmer/tsdx) compatibility with [Zeit/Now](https://zeit.co).

## What does not work at the moment

Project works on my development with `now dev`. It fails on production when deployed with `now` on the build step.

The error is "Cannot find module".

Dependency required is from public GitHub repository [https://github.com/cibulka/tsdx-test](https://github.com/cibulka/tsdx-test). 

## Github repo

The dependency in question will be private GitHub repo (after we find what is causing the problem), so I don't require it from npm. I require it with `<user>/<repo>` from GitHub pattern as described [here](https://medium.com/@jonchurch/use-github-branch-as-dependency-in-package-json-5eb609c81f1a). 

I also require [react-typed](https://github.com/ssbeefeater/react-typed) similar way. If I require just that, deployment works.

## What you should see

![alt text](https://raw.githubusercontent.com/cibulka/tsdx-test-project/screenshot.png)


