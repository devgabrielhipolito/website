import { Section } from "@/src/base-components/section";
import { Text } from "@/src/base-components/text";

const Team = () => {
  return (
    <Section>
      <div className="w-full flex justify-between flex-col lg:flex-row gap-5">
        <Text as={"h1"} variant={"heading"}>
          Conheça quem esta por trás de cada entrega
        </Text>
        <Text variant={"body"}>
          Sem departamentos, sem intermediários. Cada projeto passa direto pelas
          mãos de quem entende do assunto — do primeiro código à entrega final.
        </Text>
      </div>
    </Section>
  );
};

export default Team;
