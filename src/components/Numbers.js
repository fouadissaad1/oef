import {Section} from "./Section";
import {Card} from "./Card";

export function Numbers(props) {
    const {numbers, title} = props;

    return <Section title={title}>
        {numbers.map((n, i) => <Card key={i}>{n}</Card>)}
    </Section>
}

