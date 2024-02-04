import css from './ImageGallery.module.css';
import { ImageCard } from '../ImageCard';

export const ImageGallery = ({ fechResult, onClick }) => {
  return (
    <ul className={css.photoCard}>
      {fechResult.map(item => (
        <li
          key={item.id}
          onClick={() => {
            onClick(item);
          }}
        >
          <ImageCard param={item} />
        </li>
      ))}
    </ul>
  );
};
