import './style.css';
const MyComponent = () => {
    const temp = "Test String";
    const tan = {
        name: "DinhTan",
        age: 23
    }
    return (
        <>
            <div className="child"
                style={
                    { borderRadius: "10000px" }
                }
            >  {JSON.stringify(tan)} Test Component 1</div>
            <div>{temp} Component 2</div>
        </>
    )
}
const FakeComponent = () => {
    return (
        <div> Fake Component </div>
    )
}
export default MyComponent;