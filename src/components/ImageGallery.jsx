import { ImageCard } from './ImageCard';

export const ImageGallery = ({ fechResult, onClick }) => {
  return (
    <ul>
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
