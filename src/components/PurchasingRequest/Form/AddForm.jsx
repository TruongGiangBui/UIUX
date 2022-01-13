import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState, useEffect } from "react";
import moment from "moment";
import AddProduct from "./AddProduct";
import "./AddForm.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  padding: "15px 20px",
};

const AddForm = ({ onClose, open, onAdd }) => {
  const [maphieu, setMaphieu] = useState();
  const [ngaynhan, setNgaynhan] = useState();
  const [mota, setMota] = useState();
  const [hang, setHang] = useState("Cao su");
  const [soluong, setSoluong] = useState();
  const [donvicungcap, setDonvicungcap] = useState();
  const [baogia, setBaogia] = useState();
  const [mahang, setMahang] = useState("HH20211123.106408");
  const [donvi, setDonvi] = useState("Thùng");

  useEffect(() => {
    let r = Math.floor(Math.random() * 900000) + 100000;
    setMaphieu("PDN" + moment().format("YYYYMMDD") + "." + r);
  }, [open]);

  const handleSave = () => {
    onAdd({
      maphieu: maphieu,
      malenh: "",
      nguoitao: "Phạm Tuấn Hiên",
      ngaytao: moment().format("DD-MM-YYYY"),
      ngaynhan: ngaynhan,
      trangthai: "Chưa xử lý",
      hang: hang,
      soluong: soluong,
      mota: mota,
      donvicungcap: donvicungcap,
      baogia: baogia,
      mahang: mahang,
      donvi: donvi,
    });
    onClose();
  };

  return (
    <Box sx={style}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid #eee",
          padding: "5px",
          marginBottom: "20px",
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
          Thêm phiếu đề nghị mua hàng
        </Typography>
        <IconButton
          aria-label="cancel"
          sx={{ position: "absolute", top: 5, right: 0 }}
          onClick={onClose}
        >
          <CancelIcon />
        </IconButton>
      </Box>

      <Box className="bodyAddForm">
        <form>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Mã phiếu đề nghị mua hàng<span style={{ color: "#f00" }}> *</span>
          </label>
          <input disabled className="hienInput" value={maphieu} />

          <label
            style={{ display: "block", marginBottom: "5px", marginTop: "16px" }}
          >
            Ngày dự kiến nhận<span style={{ color: "#f00" }}> *</span>
          </label>
          <input
            className="hienInput"
            placeholder="dd-mm-yyyy"
            value={ngaynhan}
            onChange={(e) => setNgaynhan(e.target.value)}
          />

          <label
            style={{ display: "block", marginBottom: "5px", marginTop: "16px" }}
          >
            Mô tả<span style={{ color: "#f00" }}> *</span>
          </label>
          <input
            className="hienInput"
            value={mota}
            onChange={(e) => setMota(e.target.value)}
          />

          <AddProduct
            mahang={mahang}
            setMahang={setMahang}
            hang={hang}
            setHang={setHang}
            soluong={soluong}
            setSoluong={setSoluong}
            donvicungcap={donvicungcap}
            setDonvicungcap={setDonvicungcap}
            baogia={baogia}
            setBaogia={setBaogia}
            donvi={donvi}
            setDonvi={setDonvi}
          />
        </form>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography color="error">
          ( * ) : Các trường thông tin bắt buộc
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <Button variant="contained" color="error" onClick={onClose}>
            Hủy
          </Button>
          <Button variant="contained" color="success" onClick={handleSave}>
            Lưu
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddForm;
