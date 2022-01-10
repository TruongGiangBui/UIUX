import React, { useState } from "react";
import "./AddProduct.css";
import "./AddForm.css";

const AddProduct = () => {
  const data = [
    {
      id: 0,
      mahang: "HH20211123.106408",
      tenhang: "Cao su FFF",
      donvi: "thùng",
    },
    { id: 1, mahang: "HH20211123.692089", tenhang: "Sắt", donvi: "Kilogam" },
    { id: 2, mahang: "HH20211112.106933", tenhang: "Cacbon", donvi: "gam" },
  ];

  const [hang, setHang] = useState(0);
  const [soluong, setSoluong] = useState(0);
  const [donvicungcap, setDonvicungcap] = useState();
  const [baogia, setBaogia] = useState();

  return (
    <div className="addProduct">
      <div className="addProduct-title">Thông tin hàng</div>

      <label style={{ display: "block", marginBottom: "5px" }}>
        Mã mặt hàng<span style={{ color: "#f00" }}> *</span>
      </label>
      <select
        className="hienInput"
        style={{ backgroundColor: "#fff" }}
        value={hang}
        onChange={(e) => {
          setHang(e.target.value);
          console.log(e.target.value);
        }}
      >
        {data.map((v, i) => (
          <option value={v.id}>{v.mahang + " - " + v.tenhang}</option>
        ))}
      </select>

      <label
        style={{ display: "block", marginBottom: "5px", marginTop: "16px" }}
      >
        Đơn vị tính<span style={{ color: "#f00" }}> *</span>
      </label>
      <input className="hienInput" disabled value={data[hang].donvi} />

      <label
        style={{ display: "block", marginBottom: "5px", marginTop: "16px" }}
      >
        Số lượng<span style={{ color: "#f00" }}> *</span>
      </label>
      <input
        className="hienInput"
        type="number"
        value={soluong}
        onChange={(e) => setSoluong(e.value)}
      />

      <label
        style={{ display: "block", marginBottom: "5px", marginTop: "16px" }}
      >
        Đơn vị cung cấp<span style={{ color: "#f00" }}> *</span>
      </label>
      <input
        className="hienInput"
        value={donvicungcap}
        onChange={(e) => setDonvicungcap(e.value)}
      />

      <label
        style={{ display: "block", marginBottom: "5px", marginTop: "16px" }}
      >
        Báo giá<span style={{ color: "#f00" }}> *</span>
      </label>
      <input
        className="hienInput"
        type="number"
        value={baogia}
        onChange={(e) => setBaogia(e.value)}
      />
    </div>
  );
};

export default AddProduct;
