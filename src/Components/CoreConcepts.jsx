import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"
import Section from "./Section"

export default function CoreConcepts() {
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {/* Passing object into component as props */}
                {CORE_CONCEPTS.map(item => <CoreConcept key={item.title} {...item} />)}
            </ul>
        </Section>
    )
}