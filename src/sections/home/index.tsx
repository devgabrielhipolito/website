import { Button } from "@/src/base-components/button";
import { Section } from "@/src/base-components/section";
import { MoveRight } from "lucide-react";
import { System } from "../mockup/system";
import { Text } from "@/src/base-components/text";

const Initial = () => {
  return (
    <Section
      gap={"lg"}
      display={"flex"}
      className="xl:flex-row mt-30  xl:mt-60">
      <div className=" xl:w-216.25 w-full flex  flex-col gap-5 ">
        <div className="flex gap-4 items-center">
          <div className="w-2.5 h-2.5 bg-green-300 rounded-full" />
          <Text variant={"caption"}>
            Desenvolvimento web / Marketing / Apps
          </Text>
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
        <div className="flex gap-5 flex-wrap ">
          <Button variant={"outline"} rightIcon={<MoveRight />}>
            Nosso serviços
          </Button>
          <Button variant={"secondary"} rightIcon={<MoveRight />}>
            Conversar com o time
          </Button>
        </div>
      </div>
      <System />
    </Section>
  );
};

export default Initial;
