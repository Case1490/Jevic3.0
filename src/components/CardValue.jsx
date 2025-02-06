import CheckIcon from "../icons/CheckIcon";

const CardValue = ({ title, paragraph }) => {
  return (
    <div className="flex items-start gap-x-4 bg-gray-200 p-2 rounded-xl">
      <div>
        <CheckIcon />
      </div>
      <div>
        <h1 className="font-bold text-DarkMain">{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default CardValue;
