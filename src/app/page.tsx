import { DualEntry } from "@/components/sections/home/DualEntry";
import { Hero } from "@/components/sections/home/Hero";
import { JoinCta } from "@/components/sections/home/JoinCta";
import { LifestyleReel } from "@/components/sections/home/LifestyleReel";
import { Manifesto } from "@/components/sections/home/Manifesto";
import { Services } from "@/components/sections/home/Services";
import { ShopTeaser } from "@/components/sections/home/ShopTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <DualEntry />
      <LifestyleReel />
      <Services />
      <ShopTeaser />
      <JoinCta />
    </>
  );
}
