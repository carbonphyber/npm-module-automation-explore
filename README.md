# NPM Module Automation Explore
A test repo to explore maximum CICD and GitHub automation for a JavaScript NPM repo. This repo aims to streamline enforcement of reporting issues; managing code submissions (PRs); maintaining code style, quality, and security; and with the potential to be used as a template for other GitHub-based JavaScript/NPM projects.

## Versioning
NPM uses [Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning).
This repo requires all commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced using [a GitHub Action](https://github.com/marketplace/actions/commit-linter)). This commit message rigidity allows the repo to automatically know how to increment the Release version number (for both GitHub Releases and the NPM version number) and to auto-generate the `CHANGELOG.md` file.

## Changelog
A useful feature of [Conventional Commits](https://www.conventionalcommits.org/) is that it can deterministically generate a `CHANGELOG.md` file (in addition to the other benefits) entirely from commit messages which adhere to the convention.

This repo uses a GitHub Action to regenerate the `CHANGELOG.md` file on every push into the `main` branch then commit the CHANGELOG changes to the repo.

## Testing
This repo uses Jest for unit testing.

To run the tests, run the command `npm run test`.

The full suite of tests is run upon Pull Request.
