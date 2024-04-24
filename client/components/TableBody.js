import React from "react";

function TableBody({tableData}) {
    const tdStyle = {
        border: "1px solid black",
        padding: "8px",
        textAlign: "left",
    };

    return (
        <tbody id="table_body">
            {tableData.map((item, index) => (
                <tr key={index}>
                    <td style={tdStyle}>{item.employee_id}</td>
                    <td style={tdStyle}>{item.full_name}</td>
                    <td style={tdStyle}>{item.project_name}</td>
                    <td style={tdStyle}>{new Date(item.start_date).toLocaleDateString()}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableBody;