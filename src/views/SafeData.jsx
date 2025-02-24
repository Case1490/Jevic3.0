import { useEffect } from "react";

const SafeData = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[180px] min-h-screen flex flex-col items-center justify-center p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Política de Privacidad
      </h1>

      <p className="mb-4 text-center">
        En <strong>JevicTecnology</strong>, nos comprometemos a proteger tu
        privacidad y garantizar la seguridad de tu información personal. Esta
        política describe cómo recopilamos, usamos, almacenamos y protegemos tus
        datos.
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        1. Información que Recopilamos
      </h2>
      <p className="mb-4">
        Podemos recopilar información personal cuando interactúas con nuestros
        servicios, incluyendo:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Nombre, correo electrónico y número de teléfono al registrarte o
          contactarnos.
        </li>
        <li>
          Datos de navegación, como dirección IP, tipo de navegador y páginas
          visitadas.
        </li>
        <li>
          Información sobre transacciones, en caso de compras realizadas en
          nuestro sitio.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">2. Uso de la Información</h2>
      <p className="mb-4">
        Utilizamos los datos recopilados para mejorar tu experiencia y
        garantizar el mejor servicio. Entre los principales usos de la
        información se incluyen:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Procesar pedidos y brindar soporte al cliente.</li>
        <li>
          Personalizar la experiencia de usuario con recomendaciones y contenido
          relevante.
        </li>
        <li>
          Enviar notificaciones sobre actualizaciones, promociones y cambios en
          nuestros servicios.
        </li>
        <li>
          Mejorar la seguridad y prevenir fraudes o actividades no autorizadas.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">3. Protección de Datos</h2>
      <p className="mb-4">
        Nos tomamos muy en serio la seguridad de tu información y aplicamos
        medidas para protegerla, tales como:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Uso de encriptación para proteger datos sensibles.</li>
        <li>
          Implementación de protocolos de seguridad para evitar accesos no
          autorizados.
        </li>
        <li>
          Acceso restringido a la información solo para personal autorizado.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">
        4. Compartición de Información
      </h2>
      <p className="mb-4">
        No vendemos ni compartimos tu información personal con terceros, excepto
        en los siguientes casos:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Cuando es necesario para cumplir con la ley o responder a solicitudes
          legales.
        </li>
        <li>
          Para procesar pagos mediante proveedores de servicios de pago seguros.
        </li>
        <li>
          En caso de fusión, adquisición o venta de activos de la empresa.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">
        5. Cookies y Tecnologías de Seguimiento
      </h2>
      <p className="mb-4">
        Utilizamos cookies y tecnologías similares para mejorar la funcionalidad
        del sitio y personalizar la experiencia del usuario. Puedes gestionar
        tus preferencias de cookies desde la configuración de tu navegador.
      </p>

      <h2 className="text-2xl font-semibold mt-6">6. Derechos del Usuario</h2>
      <p className="mb-4">Como usuario, tienes derecho a:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Acceder, corregir o eliminar tu información personal.</li>
        <li>Solicitar detalles sobre cómo utilizamos tus datos.</li>
        <li>Optar por no recibir correos electrónicos promocionales.</li>
      </ul>
      <p className="mb-4">
        Si deseas ejercer alguno de estos derechos, puedes contactarnos en{" "}
        <strong>jevictecnology@gmail.com</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-6">7. Cambios en la Política</h2>
      <p className="mb-4 text-center">
        Podemos actualizar esta política de privacidad en cualquier momento.
        Cualquier cambio será publicado en nuestro sitio web y te notificaremos
        si es necesario.
      </p>

      <p className="text-sm text-gray-600 mt-6">
        Última actualización: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default SafeData;
