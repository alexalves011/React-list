import { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons/index";

export function Dialog({ isOpen, onClose, children }) {
  {
    /* O componente nasce (ou atualiza) recebendo isOpen e onClose via parâmetros (props).*/
  }

  const dialogRef = useRef(null);

  {
    /* o useEfect fica monitorando a variável isOpen dentro do array de dependências*/
  }

  useEffect(() => {
    console.log(isOpen);
    if (isOpen) {
      oppenDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  {
    /* Se isOpen mudou para true → O useEffect abre a caixa (dialogRef.current) e chama .showModal().*/
  }
  {
    /* Se isOpen mudou para false → O useEffect abre a caixa e chama .close().*/
  }

  const oppenDialog = () => {
    dialogRef.current.showModal();
  };

  // "Close" button closes the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <div className="btn-close-wrapper">
          <button autoFocus onClick={onClose} className="btn-close">
            {" "}
            {/* fecha a modal porque o isOpen fica false .*/}
            <IconClose />
          </button>
        </div>
        <div className="body">{children}</div>
      </dialog>
    </>
  );
}
