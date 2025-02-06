import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className=" pt-[140px]">
      <h1>xddd</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default ProductDetails;
