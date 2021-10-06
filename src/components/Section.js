import {useState} from "react";

export function Section(props) {
    const {children, title} = props;
    const [isOpen, setIsOpen] = useState(false);

    return <div className="section">
        <h3>{title}</h3>
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
        </div>
        {isOpen && children}
    </div>;
}

