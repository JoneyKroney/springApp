import './page.css';
function ColoredLine({ color }) {
return (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: "2px",
            margin: "5%"
            
        }}
    />
)
}
export default ColoredLine;