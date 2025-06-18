# Speaker Knowledge Replication with Magpie-3

This is a replication of [this experiment about speaker knowledge by Bergen & Grodner (2012)](https://psycnet.apa.org/record/2012-10772-001) using magpie 3.

Since this is an online version unlike the original, the experiment was modeled after a previous replication with magpie2, [magpie speaker knowledge](https://github.com/magpie-ea/magpie-speaker-knowledge)

## to run on the web ...

click [here](https://siihoon920.github.io/Speaker-Knowledge-Replication-with-Magpie-3/).
## To run locally ...

Given the following are installed,

- Node.js v18.x
- npm v8 or later
  
Go to directory of your choice and run
```
npx magpie-base@latest new "project-name"

```
and then 
```
npm install
```
finally 
```
npm run serve
```

## differences from official magpie 3
In this version, the file `node_modules/magpie-base/src/components/screens/DebugResultsScreen.vue` was modified to fix a bug.

## bugs to be fixed
