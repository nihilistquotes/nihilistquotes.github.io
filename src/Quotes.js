import React from "react";

class Quotes extends React.Component {
  state = {
    quotes: [
      { title: "It is what it is." },
      { title: "You are a victim of your past." },
      { title: "What contains the box?" },
      { title: "What you don't wanna think about wastes your time." },
      { title: "The only thing real is your mind. Everything else doesn't matter."},
      { title: "You are your habits." },
      { title: "You won't regret making a choice if you don't make a choice." },
      { title: "Life is a pattern of patterns." },
      { title: "Ignorance is bliss, as long as it lasts." },
      { title: "We're not the champions of evolution; we're the byproducts." },
      { title: "The more you change, everything stays the same." },
      { title: "Just look at the night sky to see how insignificant all of this is." },
      
    ],
    quote: "",
    index: 0,
    hidden: true
  };

  componentDidMount(){
      setTimeout(this.changeQuote, 0);
      //setInterval(this.toggleHidden, 4000);
  }
  componentWillUnmount(){
      clearTimeout(this.changeQuote);
  }

  toggleHidden = () => {
      this.setState( { hidden: !this.state.hidden } );
  }

  changeQuote = () => {
    this.setState( { hidden: true } );
    setTimeout(()=>{
      const index = this.state.index === this.state.quotes.length-1 ? 0 : this.state.index+1;
      this.setState( { index, hidden: false } );
    }, 1000);
    setTimeout(this.changeQuote, 4000)
  };

  render() {
    return (
      <div
        id="activeQuote"
        className={["Quotes",this.state.hidden ? "hidden" : ""].join(' ')}
        onClick={this.toggleHidden}
      >
        { this.state.quotes[this.state.index].title }
      </div>
    );
  }
}

export default Quotes;
