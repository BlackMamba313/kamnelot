import MainImg from "@/components/mainPage/MainImg";
import OurTarget from "@/components/mainPage/OurTarget";
import OurAssortment from "@/components/mainPage/OurAssortment";
import ExplanationWhy from "@/components/mainPage/ExplanationWhy";
import Image from "next/image";
import WorkStages from "@/components/mainPage/WorkStages";
import OrderContainer from "@/components/mainPage/OrderContainer";
import {ErrorBoundary} from "react-error-boundary";


export default function Home() {
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong MainImg</div>}>
        <MainImg/>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Something went wrong OurTarget</div>}>
        <OurTarget/>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Something went wrong OurAssortment</div>}>
        <OurAssortment/>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Something went wrong ExplanationWhy</div>}>
        <ExplanationWhy/>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Something went wrong Image</div>}>
        <Image
          src="/mainPage/PicGorizintal.png"
          layout="responsive"
          width={1440}
          height={429}
          alt="Picture of the author"
        />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Something went wrong WorkStages</div>}>
        <WorkStages/>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Something went wrong OrderContainer</div>}>
        <OrderContainer/>
      </ErrorBoundary>
      </>
      )
      }
