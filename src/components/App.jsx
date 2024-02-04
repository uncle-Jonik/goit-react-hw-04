import { SearchForm } from './SearchForm';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Toaster } from 'react-hot-toast';
import { LoadMoreBtn } from './LoadMoreBtn';
import { nanoid } from 'nanoid';
import { feach } from './api';
import Modal from 'react-modal';
import { ImageModal } from './ImageModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [dataModal, setDataModal] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const searchImages = async newQuery => {
    setQuery(`${nanoid()}/${newQuery}`);
    setIsOpen(false);
    setLoading(true);
    setDataModal([]);
    setTotalPage(0);
    setError(false);
    setData([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const openModal = items => {
    setDataModal(items);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fechData() {
      try {
        const fechedData = await feach(query.split('/')[1], page);

        setData([...data, ...fechedData.results]);
        setTotalPage(fechedData.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fechData();
  }, [query, page]);

  return (
    <>
      <SearchForm onSearch={searchImages} />
      {error && <b>ERROR!!!!</b>}
      {data.length > 0 && <ImageGallery fechResult={data} onClick={openModal} />}
      {loading && <Loader />}
      {data.length > 0 && !loading && totalPage !== page && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <Toaster />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ImageModal fechResult={dataModal} />
      </Modal>
    </>
  );
};
