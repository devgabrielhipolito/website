import { Card } from "@/src/base-components/cards";
import { Section } from "@/src/base-components/section";
import { Text } from "@/src/base-components/text";

const Services = () => {
  return (
    <Section display={"flex"} gap={"xl"}>
      <div className="flex flex-col gap-2">
        <Text>Serviços</Text>
        <h1 className="text-5xl xl:max-w-210 ">
          Soluções sob medida para o seu negócio, usando ferramentas de ponta.
        </h1>
      </div>

      <div className="flex gap-10 justify-between flex-wrap w-full ">
        <Card variant={"default"}>
          <Text>Landing page</Text>
          <Text className="xl:max-w-220">
            Uma página só, um objetivo só: fazer o seu visitante virar cliente.
            Landing pages rápidas, diretas e construídas pra converter — sem
            distração, sem enrolação.
          </Text>
        </Card>
        <Card>
          <Text>Landing page</Text>
          <Text className="xl:max-w-220 ">
            Uma página só, um objetivo só: fazer o seu visitante virar cliente.
            Landing pages rápidas, diretas e construídas pra converter — sem
            distração, sem enrolação.
          </Text>
        </Card>
        <Card>
          <Text>Landing page</Text>
          <Text className="xl:max-w-220 ">
            Uma página só, um objetivo só: fazer o seu visitante virar cliente.
            Landing pages rápidas, diretas e construídas pra converter — sem
            distração, sem enrolação.
          </Text>
        </Card>
        <Card>
          <Text>Landing page</Text>
          <Text className="xl:max-w-220 ">
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
