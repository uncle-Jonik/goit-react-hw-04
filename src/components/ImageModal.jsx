export const ImageModal = ({ fechResult: { alt_description, urls } }) => {
  return (
    <>
      <div>
        <img src={urls.regular} alt={alt_description} />
      </div>
    </>
  );
};
