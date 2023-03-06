import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

// import { Button } from 'components/Button/Button';
// import { getImages } from 'services/getImages';

export class App extends Component {
  state = {
    searchQuery: '',
    // loading: false,
    // page: 1,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.page !== this.state.page) {
  //     this.setState({ loading: true });
  // getImages(this.props.value, this.state.page)
  //   .then(response => response.json())
  //   .then(data => {
  //     // console.log(data);
  //     // console.log(data.hits);
  //     if (data.totalHits === 0) {
  //       return Promise.reject(new Error());
  //     }
  //     this.setState({ images: [...prevState.images, ...data.hits] });
  //     // console.log(this.state.images);
  //   })
  //   .catch(error => {
  //     this.setState({ error });
  //     // console.log(error);
  //     toast.error(
  //       'Sorry, there are no images matching your search query. Please try again.'
  //     );
  //   })
  //   .finally(() => {
  //     this.setState({ loading: false });
  //   });
  // }
  // }

  formSubmitHandler = searchQuery => {
    this.setState({ searchQuery });
    // this.setState({ page: 1 });
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

  // handleLoad = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  //   getImages(this.state.page);
  // };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Toaster position="top-right" />
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery value={this.state.searchQuery} />
        {/* <Button onClick={this.handleLoad} /> */}
      </div>
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
