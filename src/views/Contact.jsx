import { useEffect } from "react";
import ContactImage from "../assets/contact.jpg";
import PhoneIcon from "../icons/PhoneIcon";
import EmailIcon from "../icons/EmailIcon";

const Contact = () => {
  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  return (
    <div className="w-5/6 m-auto pt-[140px]">
      <h1 className="text-center my-8 text-4xl font-bold">
        ¿Tienes alguna pregunta? Escríbenos.
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-around mb-4">
        <div className="containerForm">
          <form className="form">
            <div className="descr">Contáctanos</div>
            <div className="input">
              <input required autoComplete="off" type="text" id="name" />
              <label htmlFor="name">Nombres</label>
            </div>

            <div className="input">
              <input required autoComplete="off" id="email" type="email" />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="input">
              <textarea required cols="30" rows="1" id="message"></textarea>
              <label htmlFor="message">Mensaje</label>
            </div>
            <button type="submit">Enviar →</button>
          </form>
        </div>

        <div className="w-[300px]">
          <img src={ContactImage} alt="Contacto" className="imgShadow" />
        </div>
      </div>

      <div className="flex items-center justify-around flex-wrap gap-y-4 my-8 gap-x-8">
        {/* primer cuadro */}
        <div className="bg-BlueMain p-4 text-white space-y-2 w-full lg:w-[25%] shadow-2xl">
          <div className="flex gap-x-1 items-center font-bold">
            <PhoneIcon />
            <h1>Llámanos</h1>
          </div>
          <p>+51 329432843</p>
          <p>01 9392493</p>
        </div>
        {/* segundo cuadro */}
        <div className="bg-BlueMain p-4 text-white space-y-2 w-full lg:w-[25%] shadow-2xl">
          <div className="flex gap-x-1 items-center font-bold">
            <EmailIcon />
            <h1>Correo electrónico</h1>
          </div>
          <p>dasdasda@gmail.com</p>
          <p>dasdsadasdasda@gmail.com</p>
        </div>
        {/* tercer cuadro */}
        <div className="bg-BlueMain p-4 text-white space-y-2 w-full lg:w-[25%] shadow-2xl">
          <div className="flex gap-x-1 items-center font-bold">
            <PhoneIcon />
            <h1>Horario de Atención</h1>
          </div>
          <p>Lunes - viernes .... 11am - 8pm</p>
          <p>Sábados .... 10am - 6pm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
