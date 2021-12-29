import React from "react";
import "./style/purchasingRequest.css";
import Table from "./Table";

const data = {
  header: [
    "Mã phiếu đề nghị",
    "Mã lệnh sản xuất",
    "Người tạo",
    "Ngày tạo",
    "Ngày dự kiến nhận",
    "Trạng thái",
    "Hành động",
  ],
  row: [
    {
      maphieu: "PDN20211130.244784",
      malenh: "",
      nguoitao: "Phạm Tuấn Hiên",
      ngaytao: "30-10-2021",
      ngaynhan: "04-12-2021",
      trangthai: "Chưa xử lý",
    },
    {
      maphieu: "PDN20211207.112715",
      malenh: "LSX20211116.731707",
      nguoitao: "Bùi Trường Giang",
      ngaytao: "07-12-2021",
      ngaynhan: "07-12-2021",
      trangthai: "Chưa xử lý",
    },
    {
      maphieu: "PDN20211127.172913",
      malenh: "",
      nguoitao: "Nguyễn Duy Long",
      ngaytao: "27-11-2021",
      ngaynhan: "29-11-2021",
      trangthai: "Chưa xử lý",
    },
    {
      maphieu: "PDN20211116.260709",
      malenh: "LSX20211116.731707	",
      nguoitao: "Nguyễn Hoàng Anh",
      ngaytao: "16-11-2021",
      ngaynhan: "17-11-2021",
      trangthai: "Đã hủy",
    },
  ],
};

const PurchasingRequest = () => {
  return (
    <div className="purchase-content-wrapper">
      <section className="purchase-content-header">
        <h1>Quản lý phiếu đề nghị mua hàng</h1>
        <ol className="breadcrumb">
          <li>
            <a href="/">
              <i className="fa fa-home"></i>Trang chủ
            </a>
          </li>
          <li>
            <a href="/manage-purchasing-request">
              <i className="fa fa-file"></i>Quản lý phiếu đề nghị mua hàng
            </a>
          </li>
        </ol>
      </section>
      <section className="purchase-content">
        <Table data={data} />
      </section>
      <footer></footer>
    </div>
  );
};

export default PurchasingRequest;