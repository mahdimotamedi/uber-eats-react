import React from "react";
import CpNav from "./ui/components/nav/cp.nav";
import CpHeader from "./ui/components/header/cp.header";
import Home from "./ui/views/Home";

function App() {
  return (
    <>
      <CpNav />
      <CpHeader />

      <Home />
    </>
  );
}

export default App;
