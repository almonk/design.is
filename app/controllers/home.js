import Controller from '@ember/controller';

export default Controller.extend({
  backgrounds: [
    ""
  ],

  randomQuote: Ember.computed('', {
    get() {
      let quotes = this.get('model');
      return quotes[Math.floor(Math.random()*quotes.length)]
    },
    set() {
      let quotes = this.get('model');
      return quotes[Math.floor(Math.random()*quotes.length)]
    }
  }),

  randomBackground: Ember.computed('', {
    get() {
      return "bg-1";
    }
  }),

  actions : {
    shuffleQuotes() {
      this.set('randomQuote');
    }
  }
});
