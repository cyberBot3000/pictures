import { createPortal } from 'react-dom';
import { ModalWindowProps } from './modal-window-interfaces';

export const ModalWindow = ({ visible, children }: ModalWindowProps) => {
  return visible ? createPortal(children, document.body) : null;
};
