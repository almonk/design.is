import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let quotes = [{
      text: "a plan for arranging elements in such a way as to best accomplish a particular purpose.",
      cite: "Charles Eames",
      link: " "
    }, {
      text: "thinking made visual.",
      cite: "Saul Bass",
      link: " "
    }, {
      text: "a manifestation of the capacity of the human spirit to transcend its limitations.",
      cite: "George Nelson",
      link: " "
    }, {
      text: "the human power of conceiving, planning, and making products that serve human beings in the accomplishment of their individual and collective purposes.",
      cite: "Richard Buchanan",
      link: " "   
    }, {
      text: "the cardinal means by which human beings have long tried to modify their natural environment. Design, the act of putting constructs in an order, seems to be human destiny.",
      cite: "Richard Neutra",
      link: " "         
    }, {
      text: "a process of turning people’s ideas into forms. Transforming the invisible into the visible, design is also the operation of turning mental, social and spiritual entities into physical ones. Design is the process of the human creation of new realities.",
      cite: "Kenji Ekuan",
      link: " "           
    }, {
      text: "what you do, not what you’ve done.",
      cite: "Alan Fletcher",
      link: " "              
    }, {
      text: "giving shape to man’s dream.",
      cite: "Kenji Ekuan",
      link: " "        
    }, {
      text: "the anti-thesis of accident.",
      cite: "Vernon Barber",
      link: " "      
    }, {
      text: "where science and art break even.",
      cite: "Robin Matthew",
      link: " " 
    }, {
      text: "to design a design to produce a design.",
      cite: "John Heskett",
      link: " "
    }, {
      text: "the method of putting form and content together. Design, just as art, has multiple definitions; there is no single definition. Design can be art. Design can be aesthetics. Design is so simple, that’s why it is so complicated.",
      cite: "Paul Rand",
      link: " "
    }, {
      text: "to devise courses of action aimed at changing existing situations into preferred ones.",
      cite: "Herbert Simon",
      link: " "
    }, {
      text: "a subversive practice. It has the power to imagine reality arranged in a different order of values.",
      cite: "Antonio Scarponi",
      link: " "
    }, {
      text: "to solve human problems by identifying them and executing the best solution.",
      cite: "Ivan Chermayeff",
      link: " "
    }, {
      text: "inevitable. The alternative to good design is bad design, not no design at all.",
      cite: "Douglas Martin",
      link: " "
    }, {
      text: "not style. It’s not about giving shape to the shell and not giving a damn about the guts. Good design is a renaissance attitude that combines technology, cognitive science, human need, and beauty to produce something that the world didn’t know it was missing.",
      cite: "Paola Antonelli",
      link: " "
    }, {
      text: "the fundamental soul of a human-made creation that ends up expressing itself in successive outer layers of the product or service.",
      cite: "Steve Jobs",
      link: " "    
    }, {
      text: "the conscious effort to impose a meaningful order.",
      cite: "Victor Papanek",
      link: " "
    }, {
      text: "not the narrow application of formal skills, it is a way of thinking.",
      cite: "Chris Pullman",
      link: " "
    }, {
      text: "a response to social change.",
      cite: "George Nelson",
      link: " "
    }, {
      text: "making things better for people.",
      cite: "Richard Seymour",
      link: " "
    }, {
      text: "a potent strategy tool that companies can use to gain a substantial competitive advantage.",
      cite: "Philip Kotter and G. Alexander Rath",
      link: " "
    }, {
      text: "the application of intent – the opposite of happenstance, and an antidote to accident.",
      cite: "Robert L. Peters",
      link: " "
    }, {
      text: "the site where art and technology (along with their respective evaluative and scientific ways of thinking) come together as equals, making a new form of culture possible.",
      cite: "Vilém Flusser",
      link: "https://www.amazon.co.uk/Shape-Things-Philosophy-Design/dp/1861890559/"
    }, {
      text: "a formal response to a strategic question.",
      cite: "Mariona Lopez",
      link: " "
    }, {
      text: "as much a matter of finding problems as it is solving them.",
      cite: "Bryan Lawson",
      link: " "
    }, {
      text: "how you treat your customers. If you treat them well from an environmental, emotional, and aesthetic standpoint, you’re probably doing good design.",
      cite: "Yves Behar",
      link: " "
    }, {
      text: "like a mom, nobody notices when she’s around, but everybody misses her when she’s not.",
      cite: "Santiago Borray",
      link: " "
    }, {
      text: "an art of situations. Designers respond to a need, a problem, a circumstance, that arises in the world. The best work is produced in relation to interesting situations – an open-minded client, a good cause, or great content.",
      cite: "Ellen Lupton",
      link: " "
    }]
    return quotes;
  }
});
