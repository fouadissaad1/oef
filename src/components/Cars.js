import {Section} from "./Section";
import {Card} from "./Card";

const COLORS_CAR_CSS = [
    {nameInCar: "blauw", backGroundColorInCss: "blue", colorInCss: "white"},
    {nameInCar: "geel", backGroundColorInCss: "yellow"},
    {nameInCar: "zwart", backGroundColorInCss: "black", colorInCss: "white"},
    {nameInCar: "wit", backGroundColorInCss: "black"},
    {nameInCar: "rood", backGroundColorInCss: "black", colorInCss: "white"},
    {nameInCar: "grijs", backGroundColorInCss: "black"},
];

function styleColor(color) {
    const colorCarCss = COLORS_CAR_CSS.find(c => c.nameInCar === color);
    if (!colorCarCss) return;
    return {
        backgroundColor: colorCarCss.backGroundColorInCss,
        color: colorCarCss.colorInCss,
        margin: "0.5em"
    };
}

function CarColor(props) {
    const {color} = props;

    if (!color) return null;
    return <div style={styleColor(color)}>
        kleur: {color} &nbsp;
    </div>;
}

function Car(props) {
    const {car} = props;
    return <Card title={car.name} extraClassName="car">
        {car.brand && <div>merk: {car.brand}</div>}
        {car.type && <div>type: {car.type}</div>}
        <CarColor color={car.color}/>
    </Card>;
}

export function Cars(props) {
    const {cars, title} = props;

    return <Section title={title}>
        {cars.map((c) => <Car key={c.name} car={c}/>)}
    </Section>;
}