import PropTypes from "prop-types";

function InputComponent({
  inputType,
  labelFor,
  placeholder,
  inputText,
  textClass,
}) {
  return (
    <label className="flex gap-2" htmlFor={labelFor}>
      <input
        type={inputType}
        placeholder={placeholder}
        className="rounded-full border bg-white px-2 py-2 placeholder:text-center placeholder:text-sm focus:border-4 focus:border-green-600 focus:outline-none"
      />
      <p className={`font-Inter text-sm ${textClass}`}>{inputText}</p>
    </label>
  );
}

InputComponent.propTypes = {
  labelFor: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputText: PropTypes.string,
  textClass: PropTypes.string,
};

export default InputComponent;
