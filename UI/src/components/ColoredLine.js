import './page.css';
function ColoredLine({ color }) {
return (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: "1px",
            width: '100%',
            
            
        }}
    />
)
}
export default ColoredLine;