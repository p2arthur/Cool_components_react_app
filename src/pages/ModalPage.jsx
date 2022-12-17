import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const actionBar = (
    <div>
      <Button onClick={handleClose} success>
        I accept
      </Button>
    </div>
  );

  const modalElement = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p className="font-semibold">
        Here's an important agreement for you to accept
      </p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open modal
      </Button>
      {showModal ? modalElement : null}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        molestiae tempore ipsa? Enim unde pariatur, reiciendis dolores nulla cum
        aliquam dolore. Facere, accusamus autem nemo eveniet nihil eos
        voluptatum facilis.
      </p>
    </div>
  );
}

export default ModalPage;
