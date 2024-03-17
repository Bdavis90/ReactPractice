import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS  } from "../data"

export default function CoreConcepts()
{
    return (
        <section id="core-concepts">
        <h2 >Core Concepts</h2>
        <ul>
          {/* Passing object into component as props */}
          {CORE_CONCEPTS.map(item => <CoreConcept key={item.title} {...item}/>)}
        </ul>
        </section>
    )
}