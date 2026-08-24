import { Card } from "@/src/base-components/cards";
import { Section } from "@/src/base-components/section";
import { Text } from "@/src/base-components/text";

const Services = () => {
  return (
    <Section
      borderColor={"defult"}
      border={"bottom-t"}
      display={"flex"}
      direction={"column"}
      className=" h-dvh  "
      title="Serviços"
    >
      <h1 className="text-5xl xl:max-w-210 ">
        Soluções sob medida para o seu negócio, usando ferramentas de ponta.
      </h1>

      <Card variant={"default"} className="mt-20  p-4  " title="Landing page">
        <Text variant={"subheading"} className="xl:max-w-220 " >
          Uma página só, um objetivo só: fazer o seu visitante virar cliente.
          Landing pages rápidas, diretas e construídas pra converter — sem
          distração, sem enrolação.
        </Text>
      </Card>
    </Section>
  );
};

export default Services;
