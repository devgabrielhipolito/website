import { Button } from "@/src/base-components/button";
import { Card } from "@/src/base-components/cards";
import { Section } from "@/src/base-components/section";
import { Text } from "@/src/base-components/text";
import { MoveRight } from "lucide-react";

const FirstCopy = () => {
  return (
    <Section display={"flex"} className="flex-col lg:flex-row">
      <div className="flex  flex-col  gap-5">
        <Text as="h2" variant="heading">
          Ninguém contrata o que não existe na internet.
        </Text>

        <Text variant={"body"} >
          Veja como transformo isso em algo que as pessoas encontram, confiam e
          escolhem.
        </Text>

        <Button variant={"secondary"} rightIcon={<MoveRight />}>
          Conversar com o time
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-10 grid-rows-4 w-full  lg:grid-cols-2  lg:grid-rows-2">
        <Card bg={"primary"} variant={"auto"}>
          <Text weight="semibold">Visibilidade</Text>
          <Text>
            Seu concorrente já está no topo do Google enquanto seu negócio fica
            invisível. Um site profissional coloca você na frente de quem já
            quer comprar.
          </Text>
        </Card>

        <Card variant={"auto"}>
          <Text weight="semibold">Crescimento</Text>
          <Text>
            Não adianta só existir na internet. Um site estruturado pra
            converter transforma curiosidade em contato, contato em orçamento, e
            orçamento em cliente fechado.
          </Text>
        </Card>

        <Card bg={"near-black"} variant={"auto"}>
          <Text variant="default" weight="semibold">
            Posicionamento
          </Text>
          <Text>
            Muita gente perde cliente não por falta de qualidade, mas porque a
            primeira impressão não passa confiança. Seu site é seu vendedor 24h
            ele precisa mostrar isso.
          </Text>
        </Card>
      </div>
    </Section>
  );
};

export default FirstCopy;
