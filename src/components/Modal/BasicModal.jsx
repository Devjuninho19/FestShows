import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import styles from "./BasicModal.module.css";
import Payment from "../QrCode/Payment";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div>
        <button className={styles.button} onClick={handleOpen}>
          Realizar Compra
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.info}>
          <Payment />
        </Box>
      </Modal>
    </div>
  );
}
