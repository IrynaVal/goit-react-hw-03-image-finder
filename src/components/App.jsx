import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  formSubmitHandler = searchQuery => {
    this.setState({ searchQuery });
    //   // const { name, number } = data;
    //   const { images } = this.state;
    //   // const repeatName = contacts.find(contact => contact.name === name);
    //   // if (repeatName) {
    //   //   return alert(`${name} is already in contacts`);
    //   // } else {
    //   //   const contact = {
    //   //     // id: nanoid(),
    //   //     name: name,
    //   //     number: number,
    //   //   };
    //   this.setState(prevState => ({
    //     images: [images],
    //   }));
  };

  render() {
    return (
      <>
        <Toaster position="top-right" />
        <Searchbar onSearch={this.formSubmitHandler} />
        <ImageGallery value={this.state.searchQuery} />
      </>
    );
  }

  // <div
  //   style={{
  //     height: '100vh',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     fontSize: 40,
  //     color: '#010101',
  //   }}
  // >
  //   React homework template
  // </div>
}
