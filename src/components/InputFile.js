import React from "react";
import Button from "./Button";

const InputFile = ({ text, handleFile, inverseButtonStyle, onError }) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => hiddenFileInput.current.click();

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result.split("base64,")[1];
        const [name, format] = file.name.split(".");
        handleFile({ base64, format, name });
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
        onError && onError(error);
      };
    }
  };
  return (
    <>
      <Button onClick={handleClick} inverse={inverseButtonStyle}>
        {text}
      </Button>
      <input type="file" ref={hiddenFileInput} onChange={handleChange} hidden />
    </>
  );
};
export default InputFile;
