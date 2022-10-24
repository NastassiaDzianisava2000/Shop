import axios from "axios"
import { useEffect, useState } from "react"
import rating from './assets/img/rating.svg';
import cartWhite from './assets/img/cartWhite.svg'
import arrow from './assets/img/arrowBack.svg'
import { useParams, Link } from "react-router-dom"


export const Product = () => {

  let { productId } = useParams();

  const [product, setProduct] = useState(null)

  useEffect(() => {
    let promise = axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${productId}`)
    promise.then((res) => {
      const product = res.data
      setProduct(product)
    })
  }, [])

  return (
    <div>
      {
        product === null
          ? <h1>dowload</h1>
          : <div>
            <div>
              <Link to={"/"}>
                <img src={arrow} alt="" />
                Back to Best Seller
              </Link>
              <div className="product">
                <img src={product.image} alt="" />
                <div className="info">
                  <p className="title">{product.title}</p>
                  <p className="price">$ {product.price}</p>
                  <div className="rating">
                    {/* <p>Rating: {product.rating.rate}</p> */}
                    <img src={rating} alt="" />
                  </div>
                  <div className="category">
                    <span>Category:</span>
                    <p>{product.category}</p>
                  </div>
                  <p className="description">{product.description}</p>
                  <button>
                    <img src={cartWhite} alt="" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}
