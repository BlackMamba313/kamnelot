import NavigationBlock from "@/components/NavigationBlock";
import {navLinksArticles} from "@/vendor/constants";


export default function Articles() {
  return (
    <>
      <NavigationBlock links={navLinksArticles}/>
      <div style={{height: '400px'}}></div>
    </>
  )
}