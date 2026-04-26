import LeftImage from "../../Components/ProductComponents/LeftImage"
const kite = '/images/kite.png'

const Product = () => {

  return (
    <div>
        <LeftImage image={kite} title="kite" description='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' />
    </div>
  )
}

export default Product