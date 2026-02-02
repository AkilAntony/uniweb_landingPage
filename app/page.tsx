import Hero from "@/components/HeroSection";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic"; 

export default async function Home() {
  let backgroundImage = "";
  try {
    const response = await prisma.heroSection.findFirst(
      {where: { isActive : true} as any}
    );
     
    if (response?.imageUrl) backgroundImage = response?.imageUrl;
  } catch (err) {
    backgroundImage = "";
  }
  console.log(backgroundImage,'image')
  return (
    <div>
      <Hero backgroundImage={backgroundImage} />
    </div>
  );
}
