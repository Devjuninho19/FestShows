import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./BasicModal.module.css";
import Payment from "../QrCode/Payment";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className={styles.button} onClick={handleOpen}>
        Realizar Compra
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.info}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Realize o seu Pagamento
          </Typography>
          <Payment />
        </Box>
      </Modal>
    </div>
  );
}
