import React from 'react';
import data from './data.json';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './js/Header';
import Main from './js/Main';
import Footer from './js/Footer';
import SelectedBeast from './js/SelectedBeast';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      show: false,
      horns: 0,
    };
  }

  updateHorns = number => {
    this.setState({ horns: Number(number) });
    console.log(number);
  }

  hornsArray() {
    let x = [];
    data.forEach(item => {
      if (!x.includes(item.horns)) {
        x.push(item.horns);
      }
    })
    return x;
  }

  updateState = (index) => {
    this.setState({ index: index });
  }

  showModal = () => {
    this.setState({ show: true });
  }

  closeModal = () => {
    this.setState({ show: false });
  }

  render() {

    return (
      <div className="App">

        <Header
          horns={this.state.horns}
          hornsArray={this.hornsArray}
          updateHorns={this.updateHorns} />

        <Main
          data={data}
          horns={this.state.horns}
          updateState={this.updateState}
          showModal={this.showModal} />

        <SelectedBeast
          title={data[this.state.index].title}
          imageUrl={data[this.state.index].image_url}
          description={data[this.state.index].description}
          show={this.state.show}
          closeModal={this.closeModal} />

        <Footer />
      </div>
    );
  }
}

export default App;
