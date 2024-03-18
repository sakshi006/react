/*
<div id = "parent">
    <div id = "child">
        <h1>Hi sakshi</h1>
        <h2>Hi sakshi</h2>
    </div>
</div>
*/

const element = React.createElement("div", { id: "heading1" }, 
React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "h1" }, "Hi sakshi", React.createElement("h2", { id: "h2" }, "Bye,Sakshi!"))]))

const root = ReactDOM.createRoot(document.getElementById("react-app"))

root.render(element)