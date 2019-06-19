import React from "react";

class Quotes extends React.Component {
  state = {
    quotes: [
      { title: "It is what it is." },
      { title: "You are a victim of your past." },
      { title: "What contains the box?" },
      { title: "What you don't wanna think about wastes your time." },
    ],
    quote: "",
    index: 0,
    hidden: true
  };

  componentDidMount(){
      setTimeout(this.changeQuote, 1000);
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
