# Speaker Knowledge Replication with Magpie-3

This is a replication of [this experiment about speaker knowledge by Bergen & Grodner (2012)](https://psycnet.apa.org/record/2012-10772-001) using magpie 3.

Since this is an online version unlike the original, the experiment was modeled after a previous replication with magpie2, [magpie speaker knowledge](https://github.com/magpie-ea/magpie-speaker-knowledge)

### Setup

To run the project locally, run `npm run serve`

To build the project for deployment (e.g. to Netlify), run `npm run build`

If you are hosting this repository on github, the project will automatically be built and deployed to the gh-pages branch, so you only have to enable Github Pages in your repository settings to publish your project.

For more information, see the [manual](https://magpie-experiments.org/).
### Coding style

To automatically fix coding style and format the code (linting) run `npm run lint` and `npm run lint:style`

## How to update magpie

```sh
$ cd your-project
$ npm update magpie-base
```

Read more on [maintaining npm dependencies](https://www.carlrippon.com/upgrading-npm-dependencies/).

## differences with official magpie 3
In this version, the file `node_modules/magpie-base/src/components/screens/DebugResultsScreen.vue` was modified to fix a bug.