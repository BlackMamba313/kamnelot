import NavigationBlock from "@/components/NavigationBlock";
import {navLinksDelivery} from "@/vendor/constants";


export default function Delivery() {
  return (
    <>
      <NavigationBlock links={navLinksDelivery}/>
      <div style={{height: '400px'}}></div>
    </>
  )
}