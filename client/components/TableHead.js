import React from "react";

function TableHead({tableData, updateData}) {
    const thStyle = {
        border: "1px solid black",
        padding: "8px",
        textAlign: "left",
        cursor: "pointer"
    };

    const handleClick = (hName) => {

        //Creating a copy of the sorted data since React wont notice a difference in the state if its just re-organized but has the same reference.
        const sortedData = [...tableData].sort((firstElement, secondElement) => {
            //Compare function
            const firstElementValue = firstElement[hName].toLowerCase();
            const secondElementValue = secondElement[hName].toLowerCase();

            //First comes before = negative || Equal = zero || Second comes before = positive
            //Example: "a" is less then "b"
            if (firstElementValue < secondElementValue) {
                return -1;
            }
            else if (firstElementValue > secondElementValue) {
                return 1;
            }
            else {
                return 0;
            }
        });

        updateData(sortedData);
    };

    const handleEnter = (e) => {
        e.target.style.backgroundColor = "darkred";
    };

    const handleLeave = (e) => {
        e.target.style.backgroundColor = "";
    };

    return (
        <thead id="table_head">
            <tr>
                <th style={thStyle} onClick={() => handleClick("employee_id")} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Employee_ID</th>
                <th style={thStyle} onClick={() => handleClick("full_name")} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Employee_name</th>
                <th style={thStyle} onClick={() => handleClick("project_name")} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Project_name</th>
                <th style={thStyle} onClick={() => handleClick("start_date")} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Start_date</th>
            </tr>
        </thead>
    );
}

export default TableHead;
