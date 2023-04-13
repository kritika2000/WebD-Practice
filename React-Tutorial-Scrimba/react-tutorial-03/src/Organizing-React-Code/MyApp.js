/* It's always a good idea to create meaningful components instead of putting 
all JSX inside a single component/function.
*/
//https:medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default function ReactPage() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
