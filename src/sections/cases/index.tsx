import { FlatList } from "@/src/base-components/scrollView";
import { Section } from "@/src/base-components/section";
import { Text } from "@/src/base-components/text";

const Cases = () => {
  const clientes = ["pedro", "Carlos", "Carlos"];

  return (
    <Section display={"flex"} gap={"xl"}>
      <div className="w-full flex justify-between flex-col lg:flex-row gap-5">
        <Text className="w-220" variant={"subheading"}>
          Visibilidade que virou resultado real para negócios reais
        </Text>
        <Text variant={"body"} className="w-xl">
          Veja entregas com visual profissional, navegação responsiva e foco em
          fazer o visitante entender, confiar e agir.
        </Text>
      </div>
      <div className="w-full  overflow-x-auto scrollbar-hide flex gap-4 md:gap-6 pb-2">
        <FlatList
          data={clientes}
          direction="row"
          gap={16}
          renderItem={() => (
            <div className="flex-shrink-0 w-[250px] md:w-[300px] h-[200px] md:h-[250px] xl:w-[550px] xl:h-[500px]">
              <div className="w-full h-full bg-white/40 hover:bg-white/60 backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg">
                <div className="text-center"></div>
              </div>
            </div>
          )}
          keyExtractor={(item, index) => item || index}
        />
      </div>
    </Section>
  );
};

export default Cases;
