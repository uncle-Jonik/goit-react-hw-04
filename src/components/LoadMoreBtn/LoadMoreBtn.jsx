import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.LoadMoreBtnBox}>
      <button onClick={onClick}>Load more</button>
    </div>
  );
};
