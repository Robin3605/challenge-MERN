
import useProducts from "../hooks/useProducts";
import useSpecialPrices from "../hooks/useSpecialPrices";

const ProductTable = () => {
  const userId = "123"; // Reemplaza con el ID del usuario actual
  const { products } = useProducts();
  const { specialPrices } = useSpecialPrices(userId);

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Nombre</th>
          <th className="p-2">Description</th>
          <th className="p-2">Precio</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id} className="border-b">
            <td className="p-2">{product.name}</td>
            <td className="p-2">{product.description}</td>
            <td className="p-2">{specialPrices[product._id] || product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;