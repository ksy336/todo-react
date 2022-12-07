import React, { useState } from 'react';
import BoardsView from './Boards-View';
import './Boards.sass';

const BoardsContainer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmModal = () => {
    setShowModal(false);
  };
  const openModalHandler = () => {
    setShowModal(true);
  };
  return (
    <BoardsView
      handleConfirmModal={handleConfirmModal}
      showModal={showModal}
      openModalHandler={openModalHandler}
    />
  );
};

export default BoardsContainer;
