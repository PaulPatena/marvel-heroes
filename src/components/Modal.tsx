import "./Modal.scss";
import React, { useEffect, useCallback } from "react";
import { IHeroData } from "../interfaces/marvel";

interface IModalProps {
  hero: IHeroData;
  handleHideModal(): void;
}

const Modal = ({ hero, handleHideModal }: IModalProps) => {
  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleHideModal();
      }
    },
    [handleHideModal]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp, false);

    return () => {
      document.removeEventListener("keyup", handleKeyUp, false);
    };
  }, [handleKeyUp]);

  const thumbnailUrl = hero.thumbnail.path.startsWith("http:")
    ? `${hero.thumbnail.path.replace("http://", "https://")}.${
        hero.thumbnail.extension
      }`
    : `${hero.thumbnail.path}.${hero.thumbnail.extension}`;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleHideModal}>
          &times;
        </span>

        <div className="modal-content-wrapper">
          <h1>
            {hero.name}
          </h1>
          <img className="modal-image" src={thumbnailUrl} alt={hero.name} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
