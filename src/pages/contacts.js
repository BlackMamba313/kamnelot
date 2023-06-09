import NavigationBlock from "@/components/NavigationBlock";
import {navLinksContacts} from "@/vendor/constants";
import YouAreWelcome from "@/components/contactsPage/YouAreWelcome";
import ContactOurPartners from "@/components/contactsPage/ContactOurPartners";


export default function Contacts() {

  return (
    <>
    <NavigationBlock links={navLinksContacts}/>
      <YouAreWelcome/>
      <ContactOurPartners/>
    </>
  )
}