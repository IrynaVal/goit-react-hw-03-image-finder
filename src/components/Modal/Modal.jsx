export const Modal = ({ image, tags }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <img src={image} alt={tags} />
      </div>
    </div>
  );
};
