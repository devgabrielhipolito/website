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
      className="xl:flex-row mt-30  xl:mt-65">
      <div className=" xl:w-216.25 w-full flex  flex-col gap-5 ">
        <div className="flex gap-4 items-center">
          <div className="w-2.5 h-2.5 bg-green-300 rounded-full" />
          <Text variant={"caption"}>
            Desenvolvimento web / Marketing / Apps
          </Text>
        </div>
        <Text variant={"heading"} weight={"medium"}>
          Desenvolvendo soluções,
          <span className="text-slate-gray font-light">
            criando estratégias para sua empresa
          </span>
        </Text>
        <Text className="xl:w-[556.36px]  ">
          projetos em experiências digitais que conectam pessoas, fortalecem
          marcas e ajudam empresas a alcançar novos resultados.
        </Text>
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
