import ReactDOM from 'react-dom';
import './Modal.sass';

const RootModal = (props: any) => {
  return (
    <div className="modal">
      <div className="modalBodyWrapper">{props.children}</div>
    </div>
  );
};
const BackDrop = (props: any) => {
  return <div className="backdrop-modal" onClick={props.onConfirm} />;
};

const Modal = (props: any) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')!
      )}
      {ReactDOM.createPortal(
        <RootModal>{props.children}</RootModal>,
        document.getElementById('modal-root')!
      )}
    </>
  );
};
export default Modal;
