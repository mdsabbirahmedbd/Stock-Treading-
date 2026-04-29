import LeftImage from "../../Components/ProductComponents/LeftImage"
import RightImage from "../../Components/ProductComponents/RightImage"
import Universe from "../../Components/ProductComponents/Universe"
const kite = '/images/kite.png'
const console = '/images/console.png'
const coin = '/images/coin.png'
const kiteconnect = '/images/kiteconnect.png'
const varsity = '/images/varsity.png'

const Product = () => {
   

  return (
    <div>
        <LeftImage image={kite} title="kite" description='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' />
        <RightImage image={console} title='Console' description='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.' />
         <LeftImage image={coin} title="Coin" description='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.' />
        <RightImage image={kiteconnect} title='Kite Connect API' description='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.' />

        <LeftImage image={varsity} title="Varsity mobile" description='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' />
        
        <Universe />

    </div>
  )
}

export default Product