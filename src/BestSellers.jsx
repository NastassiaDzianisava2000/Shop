import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const BestSellers = () => {

  let navigate = useNavigate ();

  const [products, setProducts] = useState ([])

  useEffect(() => {
    let promise = axios.get ('https://masterclass.kimitsu.it-incubator.ru/api/products')
    promise.then( (res) => {
    let products = res.data
    setProducts (products)
    })
  }, [])

  let showMoreHandler = (id) => {
    navigate ('product/'+id)
  }

  return (
    <div className="bestSeller">
      <h2>BestSellers</h2>
      <div className="cards">
        {
          products.map((pr) => {
            return (
              <div className="card" key={pr.id}>
                <img src={pr.image} alt="img" />
                <h4>{pr.title}</h4>
                <p className="price">${pr.price}</p>
                <button onClick={ () => showMoreHandler(pr.id) }>Show more</button></div>
            )
          })
        }
      </div>
    </div >

  )
}
