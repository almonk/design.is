import Controller from '@ember/controller';

export default Controller.extend ({
  backgroundsAvailable: 13,
  currentBg: 1,

  backgroundColor: Ember.computed('currentBg', {
    get() {
      let bgs = this.get('backgroundsAvailable');
      let currentBg = this.get('currentBg');
      let nextBg = currentBg + 1;
      if (nextBg > bgs) {
        this.set('currentBg', 1)
      }
      return this.get('getBackgroundClassName');
    }
  }),

  getBackgroundClassName: Ember.computed('currentBg', {
    get() {
      return `bg-${this.get('currentBg')}`; 
    }
  }),

  randomQuote: Ember.computed ('', {
    get () {
      let quotes = this.get ('model');
      return quotes[Math.floor (Math.random () * quotes.length)];
    },
    set () {
      let quotes = this.get ('model');
      return quotes[Math.floor (Math.random () * quotes.length)];
    },
  }),

  actions: {
    shuffleQuotes () {
      this.set ('randomQuote');
      this.set ('currentBg', this.get('currentBg') + 1);
    },
  },
});
