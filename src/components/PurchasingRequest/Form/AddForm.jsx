import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState, useEffect } from "react";
import moment from "moment";
import AddProduct from "./AddProduct";

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

const AddForm = ({ onClose, open }) => {
  const [maphieu, setMaphieu] = useState("");
  const [ngaynhan, setNgaynhan] = useState("");
  const [mota, setMota] = useState("");

  useEffect(() => {
    let r = Math.floor(Math.random() * 900000) + 100000;
    setMaphieu("PDN" + moment().format("YYYYMMDD") + "." + r);
  }, [open]);

  return (
    <Box sx={style}>
      <Box
        className="header"
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
      <Box className="body">
        <form>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Mã phiếu đề nghị mua hàng<span style={{ color: "#f00" }}> *</span>
          </label>
          <input
            disabled
            style={{
              width: "100%",
              padding: "7px 10px",
              outline: "none",
              border: "1px solid #d2d6de",
            }}
            value={maphieu}
          />

          <label
            style={{ display: "block", marginBottom: "5px", marginTop: "16px" }}
          >
            Ngày dự kiến nhận<span style={{ color: "#f00" }}> *</span>
          </label>
          <input
            style={{
              width: "100%",
              padding: "7px 10px",
              outline: "none",
              border: "1px solid #d2d6de",
            }}
            value={ngaynhan}
            onChange={(e) => setNgaynhan(e.value)}
          />

          <label
            style={{ display: "block", marginBottom: "5px", marginTop: "16px" }}
          >
            Mô tả<span style={{ color: "#f00" }}> *</span>
          </label>
          <input
            style={{
              width: "100%",
              padding: "7px 10px",
              outline: "none",
              border: "1px solid #d2d6de",
            }}
            value={mota}
            onChange={(e) => setMota(e.value)}
          />

          <AddProduct />
        </form>
      </Box>
    </Box>
  );
};

export default AddForm;
