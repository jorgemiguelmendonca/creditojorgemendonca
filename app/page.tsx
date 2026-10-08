import Credibilidade from "@/components/Credibilidade";
import ComoFunciona from "@/components/HowItWorks";
import Informativos from "@/components/Informativos";
import NewHero from "@/components/NewHero";
import ServicosCTA from "@/components/como-funciona/ServicosCTA";

export default function Home() {
  return (
    <>
      <NewHero />
      <Credibilidade />
      <ComoFunciona />
      <Informativos />
      <ServicosCTA />
    </>
  );
}
