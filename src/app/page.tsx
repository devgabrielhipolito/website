import FirstCopy from "../sections/copy/firstCopy";
import Header from "../sections/header";
import Initial from "../sections/home";

export default function Home() {
  return (
    <main className="flex m-auto flex-col w-full gap-10  h-full">
      <Header />
      <Initial />
      <FirstCopy />
    </main>
  );
}
