import Cases from "../components/cases";
import FirstCopy from "../components/copy/firstCopy";
import Header from "../components/header";
import Initial from "../components/home";
import Services from "../components/services";

export default function Home() {
  return (
    <main className="flex m-auto flex-col w-full gap-10  h-full">
      <Header />
      <Initial />
      <FirstCopy />
    </main>
  );
}
