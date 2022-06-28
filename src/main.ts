import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {
    start: 42,
  },
})

export default app
