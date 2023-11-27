import { useShoppingCart } from 'use-shopping-cart';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const ElementsArticleCard = (props) => {
  const { cartCount, addItem } = useShoppingCart();

  const addToCart = (product) => {
    const target = {
      id: product.name, 
      title: product.description,
      image: product.image,
      price: parseInt(product.price), 
      qtestock: parseInt(product.qtestock), 
      quantity: 1,
    };
    addItem(target);
    console.log('Item added to cart:', target);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <Button color="inherit">
            <Link to="/cart">
              {cartCount}
              <ShoppingCartIcon fontSize="large" />
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <div className="row">
        {props.articles &&
          props.articles.map((product) => (
            <article className="col-sm-3" key={product.name}>
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top p-5"
                  alt={product.description}
                />
              </div>
              <div className="text-center">
                <div>{product.description.substr(0, 20)} ... </div>
                <div>Prix : {product.price} TND </div>
              </div>
              <div className="text-center">
                <button
                  disabled={product.qtestock <= 1}
                  className="btn btn-warning"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
      </div>
    </>
  );
};

export default ElementsArticleCard;
