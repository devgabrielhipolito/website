import { Section } from "@/src/base-components/section";
import { Text } from "@/src/base-components/text";

const Initial = () => {
  return (
    <Section className="w-full h-dvh flex   items-center p-8 bg-radial-[at_bottom]   from-[#212C1E] from-0% to-main to-50%">
      <div className=" w-full flex flex-col gap-5 ">
        <p className="font-jarkarta-sans text-wrap font-light text-5xl  sm:text-4xl md:text-8xl xl:text-8xl lg:w-full   xl:w-250 ">
          Transformando ideias em
          <span className="text-primary italic"> #negócios</span> digitais
        </p>
        <p className="max-lg:w-full xl:w-200  text-wrap sm:text-lg lg:text-3xl   md:text-md  ">
          projetos em experiências digitais que conectam pessoas, fortalecem
          marcas e ajudam empresas a alcançar novos resultados.
        </p>
      </div>
    </Section>
  );
};

export default Initial;
