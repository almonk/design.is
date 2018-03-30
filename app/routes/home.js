import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let quotes = [{
      text: "a plan for arranging elements in such a way as to best accomplish a particular purpose.",
      cite: "Charles Eames",
      link: "https://alasdairmonk.com"
    }, {
      text: "thinking made visual.",
      cite: "Saul Bass",
      link: "https://alasdairmonk.com"
    }]
    return quotes;
  }
});
