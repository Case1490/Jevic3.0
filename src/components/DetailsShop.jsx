import FreeShipping from "../icons/FreeShipping";
import MoneyIcon from "../icons/MoneyIcon";
import PaymentMethodIcon from "../icons/PaymentMethodIcon";
import SaleIcon from "../icons/SaleIcon";
import SupportIcon from "../icons/SupportIcon";

const DetailsShop = () => {
  return (
    <div className="w-5/6 m-auto flex flex-wrap gap-y-3 items-center my-8 justify-center gap-x-4">
      <div className="rounded-md bg-gray-100 p-4 flex items-center gap-x-2 font-bold">
        <FreeShipping />
        <h1>Delivery Gratis</h1>
      </div>
      <div className="rounded-md bg-gray-100 p-4 flex items-center gap-x-2 font-bold">
        <SaleIcon />
        <h1>Precios justos</h1>
      </div>
      <div className="rounded-md bg-gray-100 p-4 flex items-center gap-x-2 font-bold">
        <PaymentMethodIcon />
        <h1>Distintos métodos de pago</h1>
      </div>
      <div className="rounded-md bg-gray-100 p-4 flex items-center gap-x-2 font-bold">
        <MoneyIcon />
        <h1>Garantía de pago</h1>
      </div>
      <div className="rounded-md bg-gray-100 p-4 flex items-center gap-x-2 font-bold">
        <SupportIcon />
        <h1>Soporte 24/7</h1>
      </div>
    </div>
  );
};

export default DetailsShop;
