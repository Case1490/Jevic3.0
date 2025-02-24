import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ContactImage from "../assets/contact.jpg";
import PhoneIcon from "../icons/PhoneIcon";
import EmailIcon from "../icons/EmailIcon";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Ocultar el mensaje de éxito después de 3 segundos
  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => {
        reset(); // Limpia el formulario y oculta el mensaje
      }, 3000);

      return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/mldenndv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-5/6 m-auto pt-[140px]">
      <h1 className="text-center my-8 text-4xl font-bold">
        ¿Tienes alguna pregunta? Escríbenos.
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-around mb-4">
        {isSubmitSuccessful && (
          <p className="mb-4 font-bold text-xl text-green-600">
            ¡Gracias por tu mensaje! Te contactaremos pronto.
          </p>
        )}
        <div className="containerForm">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="descr">Contáctanos</div>

            <div className="input">
              <input
                type="text"
                id="name"
                {...register("name", { required: "Este campo es obligatorio" })}
              />
              <label htmlFor="name">Nombres</label>
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="input">
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Correo inválido",
                  },
                })}
              />
              <label htmlFor="email">E-mail</label>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="input">
              <textarea
                id="message"
                {...register("message", {
                  required: "El mensaje no puede estar vacío",
                })}
              ></textarea>
              <label htmlFor="message">Mensaje</label>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar →"}
            </button>
          </form>
        </div>

        <div className="w-[300px]">
          <img src={ContactImage} alt="Contacto" className="imgShadow" />
        </div>
      </div>

      <div className="flex items-center justify-around flex-wrap gap-y-4 my-8 gap-x-8">
        <div className="bg-BlueMain p-4 text-white space-y-2 w-full lg:w-[25%] shadow-2xl">
          <div className="flex gap-x-1 items-center font-bold">
            <PhoneIcon />
            <h1>Llámanos</h1>
          </div>
          <p>+51 959 483 871</p>
          <p>01 9392493</p>
        </div>
        <div className="bg-BlueMain p-4 text-white space-y-2 w-full lg:w-[25%] shadow-2xl">
          <div className="flex gap-x-1 items-center font-bold">
            <EmailIcon />
            <h1>Correo electrónico</h1>
          </div>
          <p>jevictecnology@gmail.com</p>
          <p>dasdsadasdasda@gmail.com</p>
        </div>
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
