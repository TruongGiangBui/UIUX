import React from "react";
import "./style/table.css";

const Table = (props) => {
  const data = props.data;

  return (
    <table className="purchase-table">
      <tr>
        <th>STT</th>
        {data.header.map((v, i) => (
          <th>{v}</th>
        ))}
      </tr>
      {data.row.map((v, i) => (
        <tr>
          <td>{i + 1}</td>
          <td>{v.maphieu}</td>
          <td>{v.malenh}</td>
          <td>{v.nguoitao}</td>
          <td>{v.ngaytao}</td>
          <td>{v.ngaynhan}</td>
          <td
            style={
              v.trangthai === "Đã hủy"
                ? { color: "var(--color-red)" }
                : { color: "var(--color-yellow)" }
            }
          >
            {v.trangthai}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
