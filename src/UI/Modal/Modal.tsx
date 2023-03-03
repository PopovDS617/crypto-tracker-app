import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import {} from '../../models/ui-models';

import styles from './Modal.module.css';

interface Props {
  onClose?: () => void;
  children?: React.ReactNode;
}

const Backdrop = (props: Props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props: Props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const ModalWindow = (props: Props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default ModalWindow;
