import MainImg from "@/components/mainPage/MainImg";
import OurTarget from "@/components/mainPage/OurTarget";
import OurAssortment from "@/components/mainPage/OurAssortment";
import ExplanationWhy from "@/components/mainPage/ExplanationWhy";
import Image from "next/image";
import WorkStages from "@/components/mainPage/WorkStages";
import OrderContainer from "@/components/mainPage/OrderContainer";


export default function Home() {
  return (
    <>
      <MainImg/>
      <OurTarget/>
      <OurAssortment/>
      <ExplanationWhy/>
      <Image
        src="/mainPage/PicGorizintal.png"
        layout="responsive"
        width={1440}
        height={429}
        alt="Picture of the author"
      />
      <WorkStages/>
      <OrderContainer/>
    </>
  )
}
