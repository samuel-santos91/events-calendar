interface ModalProps {
  backDropClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ backDropClick }) => {
  return (
    <section className="absolute top-0 left-0 w-full h-full">
      <div
        onClick={() => backDropClick(false)}
        className="absolute top-0 left-0 bg-black bg-opacity-20 backdrop-blur-sm w-full h-full z-10"
      />
      <div className="w-80 h-96 bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        Modal
      </div>
    </section>
  );
};

export default Modal;
