import { FlatList } from "@/src/base-components/scrollView";
import { Section } from "@/src/base-components/section";

const Cases = () => {
  const clientes = ["pedro", "Carlos"];
  return (
    <Section
      borderColor={"defult"}
      border={"bottom-t"}
      display={"flex"}
      direction={"column"}
      className=" h-dvh gap-10 "
      title="Cases de sucesso"
    >
      <div className="w-full flex justify-between ">
        <h1 className="text-5xl xl:max-w-170 ">
          Visibilidade que virou resultado real para negócios reais
        </h1>
        <p className="text-[25px] xl:max-w-170 ">
          Veja entregas com visual profissional, navegação responsiva e foco em
          fazer o visitante entender, confiar e agir.
        </p>
      </div>

      <FlatList
        data={clientes}
        renderItem={() => (
          <div
            className="w-100 h-100 
          box-content  flex items-center 
          justify-center 
          rounded-2xl 
          hover:p-4  bg-white/40 transition-[padding]"
          ></div>
        )}
      />
    </Section>
  );
};

export default Cases;
