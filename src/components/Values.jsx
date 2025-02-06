import CardValue from "./CardValue";

const Values = () => {
  return (
    <div className="my-8">
      <h1 className="text-center my-4 text-4xl font-bold">Nuestros Valores</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <CardValue
          title="Innovación"
          paragraph="Nos esforzamos constantemente por ofrecer productos y servicios que representen lo último en tecnología, adaptándonos a las tendencias y necesidades cambiantes del mercado."
        />
        <CardValue
          title="Calidad"
          paragraph="Seleccionamos cuidadosamente cada producto para garantizar su rendimiento, durabilidad y fiabilidad, ofreciendo siempre lo mejor a nuestros clientes."
        />
        <CardValue
          title="Compromiso con el Cliente"
          paragraph="Nuestra prioridad es brindar una experiencia excepcional, desde el primer contacto hasta el soporte postventa, asegurándonos de que cada cliente se sienta valorado y respaldado."
        />
        <CardValue
          title="Accesibilidad"
          paragraph="Creemos que la tecnología debe estar al alcance de todos, por lo que trabajamos para ofrecer precios competitivos y opciones de financiamiento adaptadas a diferentes necesidades."
        />
        <CardValue
          title="Sostenibilidad"
          paragraph="Promovemos prácticas responsables, desde el uso de empaques ecológicos hasta el reciclaje de productos electrónicos, contribuyendo a un futuro más sostenible."
        />
        <CardValue
          title="Transparencia"
          paragraph="Construimos relaciones basadas en la confianza, ofreciendo información clara sobre nuestros productos, políticas y servicios, sin sorpresas ni costos ocultos."
        />
      </div>
    </div>
  );
};

export default Values;
