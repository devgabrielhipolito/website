import { Button } from "@/src/base-components/button";
import { Card } from "@/src/base-components/cards";
import { Section } from "@/src/base-components/section";
import { MoveRight } from "lucide-react";

const FirstCopy = () => {
  return (
    <Section display={"flex"}>
      <div className="flex xl:w-full w-full justify-between max-lg:flex-col gap-10 rounded-lg">
        <div className="flex  flex-col  gap-5">
          <h2 className=" text-3xl text-snow-white font-normal xl:text-6xl xl:w-170">
            Ninguém contrata o que não existe na internet.
          </h2>
          <p className="text-snow-white text-1xl xl:text-[23px] font-light font-jarkarta-sans xl:w-100.25">
            Veja como transformo isso em algo que as pessoas encontram, confiam
            e escolhem.
          </p>
          <Button variant={"secondary"} rightIcon={<MoveRight />}>
            Conversar com o time
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 grid-rows-4 w-full m-auto md:grid-cols-2  md:grid-rows-2">
          <Card bg={"primary"} variant={"default"} className="w-full">
            <h1 className="text-[20px] xl:text-2xl">Visibilidade</h1>
            <p className="xl:text-[16px] text-[14px] w-full font-light ">
              Seu concorrente já está no topo do Google enquanto seu negócio
              fica invisível. Um site profissional coloca você na frente de quem
              já quer comprar.
            </p>
          </Card>

          <Card variant={"default"}>
            <h1 className="text-[20px]  xl:text-2xl">Crescimento</h1>
            <p className="xl:text-[16px] text-[14px] font-light">
              Não adianta só existir na internet. Um site estruturado pra
              converter transforma curiosidade em contato, contato em orçamento,
              e orçamento em cliente fechado.
            </p>
          </Card>

          <Card bg={"near-black"} variant={"default"}>
            <h1 className="text-[20px] xl:text-2xl">Posicionamento</h1>
            <p className="xl:text-[16px] text-[14px] font-light">
              Muita gente perde cliente não por falta de qualidade, mas porque a
              primeira impressão não passa confiança. Seu site é seu vendedor
              24h ele precisa mostrar isso.
            </p>
          </Card>

          <Card bg={"primary"} variant={"default"}>
            <h1 className="text-[20px] xl:text-2xl">Posicionamento</h1>
            <p className="xl:text-[16px] text-[14px] font-light">
              Muita gente perde cliente não por falta de qualidade, mas porque a
              primeira impressão não passa confiança. Seu site é seu vendedor
              24h ele precisa mostrar isso.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default FirstCopy;
