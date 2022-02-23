import { motion } from 'framer-motion';

const Modal = (props) => {
  const { selectedImage, setSelectedImage } = props;

  const clickHandler = (event) => {
    if (event.target.classList.contains('backdrop')) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={clickHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt="enlarged pic"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
