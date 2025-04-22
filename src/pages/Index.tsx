import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Services />
        <Calculator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
