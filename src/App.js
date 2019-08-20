import React from "react";
import Nav from "./ui/components/nav/Nav";
import Header from "./ui/components/header/Header";
import AppContent from "./ui/views/AppContent";

function App() {
  return (
    <>
      <Nav />
      <Header />

      <AppContent />
    </>
  );
}

export default App;
