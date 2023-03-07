import { Component } from 'react';
import toast from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getImages } from 'services/getImages';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    imgPerPage: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      getImages(this.props.value, this.state.page, this.state.imgPerPage)
        .then(data => {
          console.log(data);
          // console.log(data.hits);
          // console.log(this.state.imgPerPage);
          if (data.totalHits === 0) {
            return Promise.reject(new Error());
          }
          if (prevProps.value !== this.props.value) {
            // this.setState({ images: [] });
            // this.setState({ page: 1 });
            this.setState({ images: [...data.hits] });
          } else {
            this.setState({ images: [...prevState.images, ...data.hits] });
            // console.log(this.state.images);}
          }
        })

        .catch(error => {
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
        {this.state.loading && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        )}
        <>
          <ul className={css.ImageGallery}>
            {this.state.images.length !== 0 &&
              this.state.images.map(img => {
                return (
                  <ImageGalleryItem
                    item={img}
                    key={img.id}
                    onSelect={this.selectImg}
                  />
                );
              })}
          </ul>
          {this.state.images.length !== 0 && (
            <Button onClick={this.handleLoad} />
          )}
        </>
      </>
    );
  }
}

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
};
