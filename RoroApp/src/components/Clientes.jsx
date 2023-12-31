const Clientes = ({ cliente }) => {
  const { nombre, empresa, email, telefono, id } = cliente;
  return (
    <tr className="border-b space-y-2">
      <td className="p-6">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email:</span>
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Tel:</span>
          {telefono}
        </p>
      </td>

      <td className="p-6 flex gap-3">
        <button className="text-blue-600 hover:text-blue-700 text-xs">
          Editar
        </button>
        <button className="text-red-600 hover:text-red-700 text-xs">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Clientes;
