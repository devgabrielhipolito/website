import { Card } from "@/src/base-components/cards";
import { Section } from "@/src/base-components/section";
import { Text } from "@/src/base-components/text";

const FirstCopy = () => {
  return (
    <Section
      display={"flex"}
      borderColor={"defult"}
      border={"bottom-t"}
      className=" h-full xl:h-screen items-center   p-10.5"
    >
      <div className="flex flex-col justify-between w-full h-full items-center xl:flex-row">
        <div className="flex flex-col  gap-5">
          <h2 className="text-3xl   font-light xl:text-6xl xl:w-170">
            Ninguém contrata o que não existe na internet.
          </h2>
          <p className=" text-[17px]  font-light font-jarkarta-sans  xl:text-3xl xl:w-[611.6px]">
            Veja como transformo isso em algo que as pessoas encontram, confiam
            e escolhem.
          </p>
        </div>

        <div className="flex flex-col gap-10 xl:w-175">
          <Card variant={"default"}>
            <h1 className="text-1xl xl:text-2xl">1 - Visibilidade</h1>
            <p className="xl:text-[18px] text-[14px] w-full font-light ">
              Seu concorrente já está no topo do Google enquanto seu negócio
              fica invisível. Um site profissional coloca você na frente de quem
              já quer comprar.
            </p>
          </Card>

          <Card variant={"default"}>
            <h1 className="text-1xl xl:text-2xl">2 - Crescimento</h1>
            <p className="xl:text-[18px] text-[14px] font-light">
              Não adianta só existir na internet. Um site estruturado pra
              converter transforma curiosidade em contato, contato em orçamento,
              e orçamento em cliente fechado.
            </p>
          </Card>

          <Card variant={"default"}>
            <h1 className="text-1xl xl:text-2xl">3 - Posicionamento</h1>
            <p className="xl:text-[18px] text-[14px] font-light">
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
