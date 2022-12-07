import React from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

const BoardsView = ({
  showModal,
  handleConfirmModal,
  openModalHandler,
}: any) => {
  return (
    <>
      {showModal && (
        <Modal onConfirm={handleConfirmModal}>
          <header className="header-modal">
            <h2>Создание новой доски</h2>
          </header>
          <form className="main-block">
            <label htmlFor="title" className="label-item">
              Название
            </label>
            <input type="text" id="title" className="input-board" />
            <label htmlFor="description" className="label-item">
              Описание
            </label>
            <input type="text" id="description" className="input-board" />
            <Button type="submit">Создать</Button>
            <Button>Отмена</Button>
          </form>
        </Modal>
      )}
      <Header />
      <main className="main wrapper">
        <Button onClick={openModalHandler}>Создать новую доску</Button>
      </main>
    </>
  );
};

export default BoardsView;
