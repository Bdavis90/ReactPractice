import reactImg from "./assets/react-core-concepts.png"
import componentsImg from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header()
{

  const description = reactDescriptions[genRandomInt(2)]
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

function CoreConcepts({title, description, image})
{
  return (
    <li>
      <img src={image} alt="..."/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
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
      </main>
    </div>
  );
}

export default App;
