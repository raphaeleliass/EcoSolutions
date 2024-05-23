import PropTypes from "prop-types";

function ServicesCards({ title, text }) {
  return (
    <div className="flex  flex-col gap-4 p-10">
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <p className="text-sm text-gray-200">{text}</p>
    </div>
  );
}

ServicesCards.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ServicesCards;
