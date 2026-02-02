import Hero from "@/components/HeroSection";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic"; 

export default async function Home() {
  let backgroundImage = "";
  try {
    const response = await prisma.heroSection.findFirst();
    if (response?.imageUrl) backgroundImage = response?.imageUrl;
  } catch (err) {
    backgroundImage = "";
  }

  return (
    <div>
      <Hero backgroundImage={backgroundImage} />
    </div>
  );
}
