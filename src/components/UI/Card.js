import './Card.css'

function Card(props) {
    // props.children allows content be placed inside a componenet, and not just within the tag. Meaning content can be set in the middle of the opening and closing tag
    const classes = 'card ' +  props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Card;