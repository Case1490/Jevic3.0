import { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[180px] min-h-screen flex flex-col items-center justify-center p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Términos y Condiciones
      </h1>

      <p className="mb-4">
        Bienvenido a <strong>JevicTecnology</strong>. Al acceder y utilizar
        nuestros servicios, aceptas cumplir con los siguientes términos y
        condiciones. Te recomendamos leerlos atentamente.
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        1. Aceptación de los Términos
      </h2>
      <p className="mb-4">
        Al acceder a este sitio web y utilizar nuestros servicios, aceptas
        cumplir con estos términos. Si no estás de acuerdo con alguna parte de
        los mismos, te pedimos que no utilices nuestro sitio.
      </p>

      <h2 className="text-2xl font-semibold mt-6">2. Uso del Servicio</h2>
      <p className="mb-4">
        Te comprometes a utilizar nuestros servicios de forma responsable y
        legal. Queda prohibido:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Usar el servicio con fines ilícitos o fraudulentos.</li>
        <li>
          Intentar acceder sin autorización a sistemas o datos restringidos.
        </li>
        <li>Distribuir malware, virus u otro software malintencionado.</li>
        <li>
          Realizar actividades que afecten la seguridad o integridad del sitio.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">3. Propiedad Intelectual</h2>
      <p className="mb-4">
        Todo el contenido presente en nuestro sitio, incluyendo textos,
        imágenes, logotipos y diseño, es propiedad de{" "}
        <strong>JevicTecnology</strong> y está protegido por leyes de derechos
        de autor y propiedad intelectual. No puedes copiar, distribuir o
        modificar este contenido sin autorización.
      </p>

      <h2 className="text-2xl font-semibold mt-6">4. Registro y Seguridad</h2>
      <p className="mb-4">
        Para acceder a ciertas funciones, es posible que debas registrarte. Al
        hacerlo, aceptas:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Proporcionar información veraz y actualizada.</li>
        <li>Ser responsable de la seguridad de tu cuenta y contraseña.</li>
        <li>
          Notificarnos de inmediato en caso de uso no autorizado de tu cuenta.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">
        5. Limitación de Responsabilidad
      </h2>
      <p className="mb-4">
        No nos hacemos responsables de daños directos, indirectos o incidentales
        derivados del uso de nuestros servicios. En la medida permitida por la
        ley, <strong>JevicTecnology</strong> no asume responsabilidad por
        errores, interrupciones o problemas técnicos del sitio.
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        6. Modificaciones y Terminación
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho de modificar estos términos en cualquier
        momento. Te notificaremos si se realizan cambios significativos. También
        podemos suspender o cancelar el acceso al servicio si consideramos que
        se han infringido nuestras normas.
      </p>

      <h2 className="text-2xl font-semibold mt-6">7. Ley Aplicable</h2>
      <p className="mb-4">
        Estos términos y condiciones se rigen por las leyes de{" "}
        <strong>Perú/Lima</strong>. Cualquier disputa será resuelta en los
        tribunales competentes de dicha jurisdicción.
      </p>

      <p className="text-sm text-gray-600 mt-6">
        Última actualización: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default TermsAndConditions;
