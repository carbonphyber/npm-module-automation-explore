# NPM Module Automation Explore
A test repo to explore maximum CICD and GitHub automation for a JavaScript NPM repo. This repo aims to streamline enforcement of reporting issues; managing code submissions (PRs); maintaining code style, quality, and security; and with the potential to be used as a template for other GitHub-based JavaScript/NPM projects.

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Changelog, Versioning, and Release CI
NPM uses [Semantic Release](https://github.com/semantic-release/semantic-release).
This repo requires all commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced using [a GitHub Action](https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/github-actions.md)). This commit message rigidity allows the repo to automatically know how to increment the Release version number (for both GitHub Releases and the NPM version number) and to auto-generate the `CHANGELOG.md` file.

## Testing
This repo uses Jest for unit testing.

To run the tests, run the command `npm run test`.

The full suite of tests is run upon Pull Request.
