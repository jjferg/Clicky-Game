import React from 'react';
import Wrapper from "./components/Wrapper"
import Img from "../src/components/Img"
import imgsData from "./imgs.json"


class App extends React.Component {

  state = {
    imgs: [],
    clicked: [],
    count: 0
  };
  
  componentDidMount(){
    this.setState({ imgs: imgsData })
  }

  handleIncrement = (id) => {
    if (this.state.clicked.includes(id)) { // User has clicked this image before
      this.setState({ 
        count: 0,
        imgs: this.shuffle(this.state.imgs),
        clicked: []
      });
      
    } else { // User hasn't clicked before
      
      this.setState({ 
        count: this.state.count + 1,
        imgs: this.shuffle(this.state.imgs),
        clicked: [...this.state.clicked,id]
      }, ()=> console.log(this.state.count));
      
    }
    
  }

  
  
  shuffle = (imgs) => {
    for(let i = 0; i < imgs.length; i++){
      const randNum = Math.floor(Math.random() * imgs.length)
      const temp = imgs[i];
      imgs[i] = imgs[randNum];
      imgs[randNum] = temp;
    }
    return imgs;
  }

  render() {
    return (
      <Wrapper>
        {this.state.imgs.map(imgs => {
         
          return (
            <Img
              handleIncrement={this.handleIncrement}
              key={imgs.id}
              id={imgs.id}
              name={imgs.name}
              image={imgs.image}
            />
        )})}
      </Wrapper>
    );
  }
}

export default App;
