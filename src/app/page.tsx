import MainImage from "@/images/Desktop - Main.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src={MainImage} alt="Milk Logo" fill objectFit="cover" />
    </main>
  );
}
