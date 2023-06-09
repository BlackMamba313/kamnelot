import NavigationBlock from "@/components/NavigationBlock";
import {navLinksCatalog} from "@/vendor/constants";


export default function Catalog() {
  return (
    <>
      <NavigationBlock links={navLinksCatalog}/>
      <div style={{height: '400px'}}></div>
    </>
  )
}