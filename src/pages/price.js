import NavigationBlock from "@/components/NavigationBlock";
import {navLinksPrice} from "@/vendor/constants";
import TopBlock from "@/components/pricePage/TopBlock";
import SmallStoneTitle from "@/components/pricePage/SmallStoneTitle";
import PriceTable from "@/components/pricePage/PriceTable";
import {riversGalka} from "@/vendor/price";

export default function Price() {
  return (
    <>
      <NavigationBlock links={navLinksPrice}/>
      <TopBlock/>
      <SmallStoneTitle/>
      <PriceTable priceData={riversGalka} title='Галька речная'/>
    </>
  )
}