# price-chart

<img align="right" width="150" height="150" alt="Logo" src="https://vitejs.dev/logo-with-shadow.png">

Interactive product price dashboard project generated using <a target="_blank" href="https://vitejs.dev/">Vite</a>. Built with React.js, Typescript and <a target="_blank" href="https://github.com/reactchartjs/react-chartjs-2">react-chartjs-2</a>.

## Demo

<a target="_blank" href="https://price-chart.netlify.app/">https://price-chart.netlify.app/</a>

## Run Locally

```bash
  npm i
  npm run dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Documentation

Any node in the SideBar can be selected. When selecting multiple nodes, the chart will display the aggragated values of each selected nodes as well as their children's.

Only nodes within the same level in the tree can be selected together. If a node in a different level is selected, all non-same-level nodes previously selected become unselected, and the level of the newly selected node becomes the active one.
