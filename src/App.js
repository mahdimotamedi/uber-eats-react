import React from "react";
import Nav from "./ui/components/nav/Nav";
import Header from "./ui/components/header/Header";
import AppContent from "./ui/views/AppContent";
import Footer from "./ui/components/footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />

      <AppContent />

      <Footer />
    </>
  );
}

export default App;
