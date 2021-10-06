import {Section} from "./Section";

export function EventDemo() {
    return <Section title="events">
        <div style={{backgroundColor: "pink"}}
             onClick={() => {
                 alert("div is clicked");
             }}>
            <a href="http://google.com"
               onClick={(e) => {
                   e.preventDefault();
                   e.stopPropagation();
                   alert("link is clicked");
               }}>dit is een link met een href</a>
            &nbsp;- en -&nbsp;
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    alert("button is clicked");
                }}>
                dit is een button
            </button>
        </div>
    </Section>;
}