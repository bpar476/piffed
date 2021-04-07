# Piffed

Piffed is a portfolio website design kit for Next.js based sites. It includes components and other utilities that make it easier to design pretty, organised, and effective portfolio websites.

## Developing

The library is distributed as an npm package on Github Packages from this repository. Releases are made from the `release/*` branch. Contributions come from the `main` branch.

### Release process

All code should be integrated on the `main` branch. When ready to release a new version:

1. Checkout a new branch called `release/${version}` where version is the version you want to release
1. Increase version in `package.json` to the value of `${version}`
1. Commit the new version
1. Push the branch to `origin`

This will trigger the `publish-package` workflow which:

1. Builds the module
1. Publishes to github packages
1. Creates a tag from package.json `version`
1. Creates a draft release where you can fill in the changelog

For more details see `.github/workflows/publish-package.yml`

### Roadmap

1. Set up Storybook and/or tests
