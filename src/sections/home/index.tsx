import { Button } from "@/src/base-components/button";
import { Section } from "@/src/base-components/section";
import { MoveRight } from "lucide-react";
import { System } from "../mockup/system";

const Initial = () => {
  return (
    <Section
      gap={"lg"}
      display={"flex"}
      direction={"column"}
      className="xl:flex-row "
    >
      <div className=" xl:w-216.25 w-full flex  flex-col gap-5 ">
        <div className="flex gap-4 items-center">
          <div className="w-2.5 h-2.5 bg-green-300 rounded-full" />
          <p className="text-md font-light">
            Desenvolvimento web / Marketing / Apps
          </p>
        </div>
        <p className="font-jarkarta-sans w-full text-wrap font-light text-3xl  sm:text-4xl md:text-6xl xl:text-[61.26px] lg:w-full ">
          Desenvolvendo soluções,
          <span className="text-slate-gray">
            criando estratégias para sua empresa
          </span>
        </p>
        <p className="max-lg:w-full xl:w-[556.36px] max-w-[90%]  text-wrap sm:text-lg lg:text-[19.61px]   md:text-md  ">
          projetos em experiências digitais que conectam pessoas, fortalecem
          marcas e ajudam empresas a alcançar novos resultados.
        </p>
        <Button className="w-full h-20 p-5 text-sm " rightIcon={<MoveRight />}>Nosso serviços</Button>
      </div>
      <System />
    </Section>
  );
};

export default Initial;
