export default function Section({title, children, ...props}) {
    return (
        // Forwarding props for the id and other extra attributes
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}