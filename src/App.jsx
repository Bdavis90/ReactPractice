import Header from "./Components/Header.jsx";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import CoreConcepts from "./Components/CoreConcepts.jsx";
import TabButton from "./Components/TabButton.jsx";
import { useState } from "react";



function App() {

  const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(selectedButton)
  {
    setSelectedTopic(selectedButton)
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
          {CORE_CONCEPTS.map(item => <CoreConcepts key={item.title} {...item}/>)}
          {/* <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
          <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
          <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
          <CoreConcepts title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/> */}
        </ul>
        </section>
        <section id="examples"> 
          <h2>Examples</h2>
          <menu>
              <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
              <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
              <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
            </menu>
              {!selectedTopic ? <p>Please select a topic.</p> : (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
              )}             
        </section>
      </main>
    </div>
  );
}

export default App;
