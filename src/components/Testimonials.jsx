import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Quote from "../assets/blockquote.svg";

const reviews = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "José Rodríguez",
    text: "Increíble servicio al cliente. Me ayudaron a elegir el celular perfecto para mis necesidades y respondieron todas mis preguntas de manera amigable y profesional.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ana Pérez",
    text: "La entrega fue rápida y el producto llegó en perfectas condiciones. Definitivamente recomendaría esta tienda por su eficiencia y atención al detalle.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Carlos Vargas",
    text: "Me sorprendió gratamente el soporte técnico. Resolveram mi problema con la impresora en tiempo récord. ¡Son expertos en lo que hacen!",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1671823917954-dc943c1bd9df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mariana Fernández",
    text: "Desde la compra hasta la instalación, todo fue fácil y claro. Sin duda, volveré a comprar aquí por la calidad del servicio que ofrecen.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Luis Herrera",
    text: "La tienda tiene una amplia gama de productos y precios competitivos. El equipo de ventas me guió en cada paso para elegir la mejor opción para mí.",
  },
];

const Testimonials = () => {
  return (
    <div className="w-5/6 m-auto">
      <section className="testimonial-container">
        <div className="title">
          <h1 className="text-4xl font-bold text-center mb-6">
            Lo que nuestros clientes dicen de nosotros
          </h1>
        </div>

        <div className="slider-container">
          <blockquote>
            <img className="top-quote quote" src={Quote} alt="quote" />
            <img className="bottom-quote quote" src={Quote} alt="quote" />
          </blockquote>

          <Splide
            options={{
              perPage: 1,
              autoplay: true,
              speed: 1000,
              rewind: true,
              rewindByDrag: true,
            }}
          >
            {reviews.map((review) => (
              <SplideSlide key={review.id}>
                <img className="review-img" src={review.image} alt="" />
                <div className="content">
                  <p className="text">{review.text}</p>
                  <div className="info">
                    <div className="rating">
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                    </div>
                    <p className="user">{review.name}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
