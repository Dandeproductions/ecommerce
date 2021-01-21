import { commerce } from '../lib/commerce';

const fetchProducts = () => {
  commerce.products.list().then((data) => {
    console.log(data)
    alert(data.data.length)
    return data.data
  }).catch((err) => {
    console.log(err)
    return false
  })
}

export  {
  fetchProducts
}