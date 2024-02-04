import css from './ErrorMessage.module.css';

export const ErrorMessage = () => {
  return (
    <div className={css.errorMessageBox}>
      <b>Oh, something went wrong😭. Try refreshing the page🥹.</b>
    </div>
  );
};
