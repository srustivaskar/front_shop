function Child({name}){
    return(
        <div>Hello {name}</div>
    )
}

function Third(){
    return (
        <div>
            <Child name="vinish"  />
            <h2>This is Third Component</h2>
        </div>
    )
}

export default Third