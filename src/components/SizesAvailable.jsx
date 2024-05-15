import ProductInfo from "../components/ProductInfo";

function SizesAvailable({
  idProduct,
  size,
  setSize,
  sizeNotSelected,
  setSizeNotSelected,
}) {
  return (
    <>
      <p className="sizes-available">Sizes available:</p>
      {sizeNotSelected && (
        <p className="error-select-size">Please, choose the size!</p>
      )}
      <div className="choose-size-div">
        {ProductInfo[idProduct].sizes.map((sizeButton) => (
          <button
            className={
              size == sizeButton
                ? "size-number-button-chosen size-number-button"
                : "size-number-button"
            }
            key={sizeButton}
            value={sizeButton}
            onClick={(e) => {
              setSize(e.target.value);
              setSizeNotSelected(false);
            }}
          >
            {sizeButton}
          </button>
        ))}
      </div>
    </>
  );
}

export default SizesAvailable;
