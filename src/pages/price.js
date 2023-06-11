import NavigationBlock from "@/components/NavigationBlock";
import {navLinksPrice} from "@/vendor/constants";
import TopBlock from "@/components/pricePage/TopBlock";
import SmallStoneTitle from "@/components/pricePage/SmallStoneTitle";
import PriceTable from "@/components/pricePage/PriceTable";
import {MorscaiGalka, riversGalka, ValunsKavkas} from "@/vendor/price";
import ValunsTitle from "@/components/pricePage/ValunsTitle";
import LoadSome from "@/components/pricePage/LoadSome";

export default function Price() {
  return (
    <>
      <NavigationBlock links={navLinksPrice}/>
      <TopBlock/>
      <SmallStoneTitle/>
      <PriceTable priceData={riversGalka} title='Галька речная'/>
      <PriceTable priceData={MorscaiGalka} title='Галька морская'/>
      <ValunsTitle/>
      <PriceTable priceData={ValunsKavkas} title='Валуны Кавказского хребта'/>
      <LoadSome/>
    </>
  )
}