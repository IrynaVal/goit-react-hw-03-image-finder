import { Component } from 'react';
import toast from 'react-hot-toast';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/getImages';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      getImages(this.props.value, this.state.page)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          console.log(data.hits);
          if (data.totalHits === 0) {
            return Promise.reject(new Error());
          }
          this.setState({ images: [...prevState.images, ...data.hits] });
          console.log(this.state.images);
        })
        .catch(error => {
          this.setState({ error });
          // console.log(error);
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  handleLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        {this.state.loading && <p>Loading...</p>}
        <>
          <ul className="gallery">
            {this.state.images.length !== 0 &&
              this.state.images.map(img => {
                return <ImageGalleryItem item={img} key={img.id} />;
              })}
          </ul>
          <Button onClick={this.handleLoad} />
        </>
      </>
    );
  }
}
