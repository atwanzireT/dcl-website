import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Choose from "@/components/choose";
import Portfolio from "@/components/portifolio";
import ContactUs from "@/components/contact-us";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Navigation/>
      <Hero />
      <About />
      <Projects />
      <Choose />
      <Portfolio />
      <ContactUs />
    </div>

  )
}
