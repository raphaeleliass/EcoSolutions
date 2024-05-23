import PropTypes from "prop-types";

function TestimonialCard({
  textCard,
  imgCard,
  altCard,
  clientName,
  clientOccupation,
}) {
  return (
    <div className="flex w-72 flex-col items-center gap-4 py-16 rounded-2xl px-10 shadow-xl">
      <p className="text-sm font-Inter">{textCard}</p>
      <div className="flex flex-row items-center gap-2">
        <img className="size-8 rounded-full shadow-xl" src={imgCard} alt={altCard} />
        <div className="flex flex-col gap-1">
          <h3 className="font-Inter text-sm font-bold">{clientName}</h3>
          <p className="text-sm">{clientOccupation}</p>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  textCard: PropTypes.string.isRequired,
  imgCard: PropTypes.string.isRequired,
  altCard: PropTypes.string,
  clientName: PropTypes.string.isRequired,
  clientOccupation: PropTypes.string.isRequired,
};

export default TestimonialCard;
