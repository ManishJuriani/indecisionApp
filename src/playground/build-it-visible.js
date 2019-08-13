let hideDetails = true;

const main = {
    title: "Visibility Toggle",
    subtitle: "Hide & Seek",
    details: "Some details to be shown"
    // ,hideDetails: true
}

const whatToShow = ()=>{
    return <p>{main.details}</p>
}

const hideAndSeek = ()=>{
    hideDetails = !hideDetails;
    renderBuildItVisible();
}

const renderBuildItVisible = ()=>{
    const template = (
        <div>
            <h1>{main.title}</h1>
            <h3>{main.subtitle}</h3>
            <button onClick={hideAndSeek}> {hideDetails?"Show Details":"Hide Details"}</button>
            {!hideDetails && whatToShow()}
        </div>
    
    );
    ReactDOM.render(template,appRoot)    
}

const appRoot = document.getElementById("app");

renderBuildItVisible();