import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Benefits />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
