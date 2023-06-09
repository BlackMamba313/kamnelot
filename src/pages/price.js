import NavigationBlock from "@/components/NavigationBlock";
import {navLinksPrice} from "@/vendor/constants";

export default function Price() {
  return (
    <>
      <NavigationBlock links={navLinksPrice}/>
      <div style={{height: '400px'}}></div>
    </>
  )
}