import { SpectreDOM } from "@/components/dom/Spectre";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { OxpiumAgencyBanner, fineTuningBanner } from "@/lib/constant";
import { ChevronDown, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-[5vw] min-h-screen w-screen relative overflow-x-hidden pb-10">
      <div className="h-[100svh] py-10 w-full flex justify-between gap-4 items-end">
          <h1 className="lg:text-[5vw] relative z-10 sm:text-[8vw] text-3xl font-medium leading-tight">My name is Joris.<br />I craft dreams.</h1>
        <Button className="relative z-10 cursor-pointer" variant='link' size='icon' asChild>
          <ChevronDown className="animate-bounce" size={30} />
        </Button>
        <nav className="absolute flex gap-3 top-0 z-10 right-0 px-[5vw] py-10">
          <Button size='icon' variant='outline' asChild>
            <a aria-label="Instagram" href="https://www.instagram.com/joris.delorme/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
          </Button>
          <Button size='icon' variant='outline' asChild>
            <a aria-label="Linkedin" href="https://www.linkedin.com/in/joris-delorme-b757a5229/" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
          </Button>
          <Button size='icon' variant='outline' asChild>
            <a aria-label="Twitter" href="https://twitter.com/joris_delorme_" target="_blank" rel="noopener noreferrer"><Twitter size={18} /></a>
          </Button>
          <Button size='icon' variant='outline' asChild>
            <a aria-label="Github" href="https://github.com/joris-delorme" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
          </Button>
        </nav>
        <SpectreDOM />
      </div>
      <div>
        <Separator className="mb-10" />
        <h2 className="font-bold sm:text-3xl text-xl mb-5">Dernier Projets</h2>
        <div className="flex pb-20 gap-10 md:flex-row flex-col items-center">
          <a className="md:w-fit w-full" aria-label="Fine Tuning Project" href="https://ft.jorisdelorme.fr" target="_blank" rel="noopener noreferrer">
            <div className="border rounded-lg overflow-hidden">
              <Image className="aspect-square w-full" src={fineTuningBanner} alt="Fine Tuning project" width={378} height={378} />
            </div>
            <h3 className="text-xl font-bold mt-2">Fine-tuning OpenAI Model</h3>
            <p className="text-muted-foreground">31 Août 2023</p>
          </a>
          <a className="md:w-fit w-full" aria-label="Oxpium Agency Project" href="https://oxpium.fr" target="_blank" rel="noopener noreferrer">
            <div className="border rounded-lg overflow-hidden">
              <Image className="aspect-square w-full" src={OxpiumAgencyBanner} alt="Fine Tuning project" width={378} height={378} />
            </div>
            <h3 className="text-xl font-bold mt-2">Oxpium Agency</h3>
            <p className="text-muted-foreground">12 Mars 2023</p>
          </a>
        </div>
      </div>
      <Separator className="mb-10" />
      <div className="flex justify-between items-end">
        <div className=""></div>
        <nav className="lg:flex gap-3 hidden">
          <Button size='icon' variant='outline' asChild>
            <a aria-label="Instagram" href="https://www.instagram.com/joris.delorme/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
          </Button>
          <Button size='icon' variant='outline' asChild>
            <a aria-label="Linkedin" href="https://www.linkedin.com/in/joris-delorme-b757a5229/" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
          </Button>
          <Button size='icon' variant='outline' asChild>
            <a aria-label="Twitter" href="https://twitter.com/joris_delorme_" target="_blank" rel="noopener noreferrer"><Twitter size={18} /></a>
          </Button>
          <Button size='icon' variant='outline' asChild>
            <a aria-label="Github" href="https://github.com/joris-delorme" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
          </Button>
        </nav>
      </div>
    </main>
  )
}
