import { FC } from "react";
import { Link } from "react-router-dom";

const Cart: FC = () => {
  return (
    <>
      <div className="min-h-80 max-w-80  bg-white rounded-xl">
        <Link to={"proshop-gu6d.onrender.com"}>
          <div>
            <img src="../../../src/assets/proshop.png" alt="proshop" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cart;
