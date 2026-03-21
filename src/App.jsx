import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import WhatsappButton from "./components/WhatsAppButton";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <section id="center">
        <Nav />
        <WhatsappButton />
        <Hero />
        <About />
        <WhyChoose />
        <Card />
        <Faq />
        <Footer />
      </section>
    </>
  );
}

export default App;
