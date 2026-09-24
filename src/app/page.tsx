import Cases from "../sections/cases";
import FirstCopy from "../sections/copy/firstCopy";
import Footer from "../sections/footer";
import Header from "../sections/header";
import Initial from "../sections/home";
import Services from "../sections/services";
import Team from "../sections/team";

export default function Home() {
  return (
    <main className="flex m-auto flex-col w-full  items-center gap-40 h-full">
      <Header />
      <Initial />
      <FirstCopy />
      <Services />
      <Cases />
      <Team />
      <Footer />
    </main>
  );
}
