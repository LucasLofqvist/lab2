import React from "react";

function TableHead() {
    const thStyle = {
        border: "1px solid black",
        padding: "8px",
        textAlign: "left",
    };

    return (
        <thead>
            <tr>
                <th style={thStyle}>Employee_ID</th>
                <th style={thStyle}>Employee_name</th>
                <th style={thStyle}>Project_name</th>
                <th style={thStyle}>Start_date</th>
            </tr>
        </thead>
    );
}

export default TableHead;
