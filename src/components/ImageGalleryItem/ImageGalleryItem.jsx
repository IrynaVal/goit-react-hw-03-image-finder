export const ImageGalleryItem = ({
  item: { webformatURL, largeImageURL, tags },
}) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
