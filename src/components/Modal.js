const Modal = (props) => {
  const { selectedImage, setSelectedImage } = props;

  const clickHandler = (event) => {
    if (event.target.classList.contains('backdrop')) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="backdrop" onClick={clickHandler}>
      <img src={selectedImage} alt="enlarged pic" />
    </div>
  );
};

export default Modal;
