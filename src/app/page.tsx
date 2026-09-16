import FirstCopy from "../sections/copy/firstCopy";
import Header from "../sections/header";
import Initial from "../sections/home";
import Services from "../sections/services";

export default function Home() {
  return (
    <main className="flex m-auto flex-col w-full items-center gap-40 h-full">
      <Header />
      <Initial />
      <FirstCopy />
      <Services />
    </main>
  );
}
