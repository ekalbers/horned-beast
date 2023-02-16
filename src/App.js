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
    this.state = { index: 0 };
  }

  updateState = (index) => {
    console.log('updateState');
    this.state.index = index;
    console.log(this.state.index);
  }

  createModal = index => {
    console.log('createModal');
    console.log(data[index].title);
    console.log(data[index].image_url);
    console.log(data[index].description)
    return (
      <SelectedBeast
        title={data[this.state.index].title}
        imageUrl={data[this.state.index].image_url}
        description={data[this.state.index].description} />
    );
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Main data={data} updateState={this.updateState} createModal={this.createModal} />
        <Footer />
      </div>
    );
  }
}

export default App;
