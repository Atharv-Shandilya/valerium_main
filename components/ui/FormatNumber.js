const FormatNumber = ({ number, size, integerSize, decimalSize }) => {
  const integerPart = Math.floor(number);
  let decimalPart = (number % 1).toFixed(4).substring(2);

  const isLongDecimal = number < 0.0001;
  if (isLongDecimal) {
    decimalPart = decimalPart.substring(0, 4);
  }

  return (
    <div className="font-bold text-black flex items-center">
      {isLongDecimal && <span className={size}>{"<"}</span>}

      <p>
        <span className={integerSize}>$ {integerPart}.</span>
        <span className={decimalSize}>
          {isLongDecimal ? "0001" : decimalPart}
        </span>
      </p>
    </div>
  );
};

export default FormatNumber;
