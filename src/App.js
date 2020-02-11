import React from "react";
import Wrapper from "./components/Wrapper";
import Img from "../src/components/Img";
import imgsData from "./imgs.json";
import Heading from "./components/Heading";
const styles = {
  bgStyles: {
      background: "black"
  }
}


class App extends React.Component {
  state = {
    imgs: [],
    clicked: [],
    count: 0,
    high: 0
  };

  componentDidMount() {
    this.setState({ imgs: imgsData });
  }

  // this function just simply handles the tally of guesses
  handleIncrement = id => {
    if (this.state.clicked.includes(id)) {
      // User has clicked this image before
      this.setState(
        {
          count: 0,
          imgs: this.shuffle(this.state.imgs),
          clicked: [],
          high: this.highScore(this.state.count, this.state.high)
        }
      )
    } else {
      // User hasn't clicked before

      this.setState(
        {
          count: this.state.count + 1,
          imgs: this.shuffle(this.state.imgs),
          clicked: [...this.state.clicked, id]
        },
        () => console.log(this.state.count)
      );
    }
  };

  highScore = (count,high) => {
    if (count > high) {
      return count
    } else {
      return high
    }
  };

  shuffle = im => {
    for (let i = 0; i < im.length; i++) {
      const randNum = Math.floor(Math.random() * im.length);
      const temp = im[i];
      im[i] = im[randNum];
      im[randNum] = temp;
    }
    return im;
  };
  render() {
    return (
      <Wrapper>
        <Heading heading={this.state.high}>
        <h2>High Score: {this.state.high}</h2>
        <h2>Score: {this.state.count}</h2>
        </Heading>
        {this.state.imgs.map(img => {
          return (
            <Img
              handleIncrement={this.handleIncrement}
              key={img.id}
              id={img.id}
              name={img.name}
              image={img.image}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default App;
