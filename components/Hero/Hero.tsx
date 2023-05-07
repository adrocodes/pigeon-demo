import Image from "next/image";
import { type HeroProps } from "./types";

export function Hero({ image, title, description }: HeroProps) {
  return (
    <div className="bg-slate-800 text-white lg:px-6">
      <div className="container mx-auto">
        <div className="lg:grid grid-cols-2 items-center">
          <div className="py-12 px-6 lg:px-0">
            <h2 className="font-bold text-4xl max-w-md">{title}</h2>
            {description && <p className="mt-2 text-lg">{description}</p>}
          </div>
          <div>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
          </div>
        </div>
      </div>
    </div>
  )
}
