import { Application } from 'static/runtime.js';

const spline = new Application();
spline.load('scene.json');


export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('spline', spline )
  }
