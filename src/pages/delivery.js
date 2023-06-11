import NavigationBlock from "@/components/NavigationBlock";
import {navLinksDelivery} from "@/vendor/constants";
import HeaderComponent from "@/components/deliveryPage/HeaderComponent";
import DeliveryList from "@/components/deliveryPage/DeliveryList";
import DeliverySteps from "@/components/deliveryPage/DeliverySteps";


export default function Delivery() {
  return (
    <>
      <NavigationBlock links={navLinksDelivery}/>
      <HeaderComponent/>
      <DeliveryList/>
      <DeliverySteps/>
    </>
  )
}