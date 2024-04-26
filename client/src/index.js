import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";

function App() {

    //Create state-hook
    //Initialized as null
    const [data, setData] = useState(null);

    //useEffect call with empty depencency array so that the effect is run only once (when the comp mounts)
    useEffect(() => {

        //Fetching data an updating the component state
        const fetchData = () => {
            fetch("http://localhost:3000/api/project_assignments")
            .then(res => res.json())
            .then(data => setData(data.response.slice(-5)))
            .catch(error => console.error(error.message));
        };

        //Called during initial render
        fetchData();

        //Fetching data in an intervall of 60 seconds
        const intervalId = setInterval(fetchData, 60000);

        //Removing the intervall when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    if (data === null){
        console.log("Loading..");
        return;
    }

    console.log("Rendering data!");
    return (
        <table style={{borderCollapse: "collapse"}}>
            <TableHead tableData={data} updateData={setData}/>
            <TableBody tableData={data} />
        </table>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));