import css from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.loaderBox}>
      <ThreeDots
        visible={true}
        height="150"
        width="150"
        color="#7c7c7c"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
