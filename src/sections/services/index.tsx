import { Card } from "@/src/base-components/cards";
import { Section } from "@/src/base-components/section";
import { Text } from "@/src/base-components/text";

const Services = () => {
  return (
    <Section display={"flex"} gap={"xl"}>
      <div className="flex flex-col gap-2 w-">
        <Text weight={"semibold"}>Serviços</Text>
        <Text as={"h1"} variant={"subheading"}>
          Soluções sob medida para o seu negócio, usando ferramentas de ponta.
        </Text>
      </div>

      <div className="flex gap-10 justify-between flex-wrap w-full ">
        <Card variant={"default"}>
          <Text weight={"semibold"}>Landing page</Text>
          <Text>
            Uma página só, um objetivo só: fazer o seu visitante virar cliente.
            Landing pages rápidas, diretas e construídas pra converter — sem
            distração, sem enrolação.
          </Text>
        </Card>
        <Card>
          <Text weight={"semibold"}>Landing page</Text>
          <Text>
            Uma página só, um objetivo só: fazer o seu visitante virar cliente.
            Landing pages rápidas, diretas e construídas pra converter — sem
            distração, sem enrolação.
          </Text>
        </Card>
        <Card>
          <Text weight={"semibold"}>Landing page</Text>
          <Text>
            Uma página só, um objetivo só: fazer o seu visitante virar cliente.
            Landing pages rápidas, diretas e construídas pra converter — sem
            distração, sem enrolação.
          </Text>
        </Card>
        <Card>
          <Text weight={"semibold"}>Landing page</Text>
          <Text>
            Uma página só, um objetivo só: fazer o seu visitante virar cliente.
            Landing pages rápidas, diretas e construídas pra converter — sem
            distração, sem enrolação.
          </Text>
        </Card>
      </div>
    </Section>
  );
};

export default Services;
