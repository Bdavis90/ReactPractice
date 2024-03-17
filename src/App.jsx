import Header from "./Components/Header.jsx";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcepts from "./Components/CoreConcepts.jsx";
import TabButton from "./Components/TabButton.jsx";



function App() {

  function handleSelect(selectedButton)
  {
    console.log(selectedButton)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2 >Core Concepts</h2>
        <ul>
          {/* Passing object into component as props */}
          {CORE_CONCEPTS.map(item => <CoreConcepts {...item}/>)}
          {/* <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
          <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
          <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
          <CoreConcepts title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/> */}
        </ul>
        </section>
        <section id="examples"> 
          <h2>Examples</h2>
          <menu>
              <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
              <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
              <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
            </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
