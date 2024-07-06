import React from "react";
import QRCode from "react-qr-code";
import style from "./Payment.module.css";
const Payment = () => {
  return (
    <div>
      <QRCode
        className={style.qr}
        size={256}
        value={
          "00020126360014br.gov.bcb.pix0114+557599156837852040000530398654041.005802BR5924Carlos Henrique Santos d6008Brasilia620905053e85x63048E8F"
        }
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default Payment;
