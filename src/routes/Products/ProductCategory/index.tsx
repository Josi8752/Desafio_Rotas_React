import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../../Data/data";
export default function ProductCategory() {
  const params = useParams();
  const product = getProduct(Number(params.productId));
  const navigate = useNavigate();
  return (
    <>{
      product &&
      <main>
        <div className="mt20 container">
          <div >
            <p> {product.value1}</p>
          </div>
          <div>
            <p>
              {product.value2}
            </p>
          </div>
          <div>
            <p>{product.value3}</p>
          </div>

        </div>

      </main>
    }</>

  );
}