export default function(){
  this.transition(
    this.childOf('#quote-text'),
    this.use('toLeft', {duration: 200, easing: 'slide'}),
  );
}
