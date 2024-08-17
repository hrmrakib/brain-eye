import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem]'>
        <Header />
      </div>
      <Hero />
      <ButtonGradient />
    </>
  );
}
