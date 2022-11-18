import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styled from "styled-components";

interface ModalProps {
  open: boolean;
  isClose: () => void;
}

const style = {
  position: "absolute",
  top: "8%",
  left: "90%",
  transform: "translate(-50%, -50%)",
  width: "13vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  border: "1px solid grey",
  borderRadius: "3%",
  backgroundColor: "#29abe2",
};

const MyModal = ({ open, isClose }: ModalProps) => {
  const handleCancel = () => {
    isClose();
  };
  const handleConfirm = () => {
    localStorage.removeItem("token");
    isClose();
  };
  return (
    <Modal open={open} onClose={isClose}>
      <Box sx={style}>
        <Typography>
          <ModalWrapper>
            <Text>Are you sure to logout ?</Text>
            <ButtonWrapper>
              <CancelButtonWrapper>
                <CancelButton onClick={handleCancel}>cancel</CancelButton>
              </CancelButtonWrapper>
              <YesButtonWrapper>
                <YesButton onClick={handleConfirm}>Confirm</YesButton>
              </YesButtonWrapper>
            </ButtonWrapper>
          </ModalWrapper>
        </Typography>
      </Box>
    </Modal>
  );
};

export default MyModal;

// styles
const ModalWrapper = styled.div`
  font-size: 1vw;
  font-weight: 600;
  color: black;
`;
const Text = styled.div`
  padding-bottom: 0.5vw;
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
`;
const CancelButtonWrapper = styled.div``;
const CancelButton = styled.button`
  background-color: green;
  color: #f5eded;
  border: none;
  border-radius: 5%;
  padding: 0.2vw;
  font-size: 0.9vw;
  font-weight: 800;
  :hover {
    cursor: pointer;
    background-color: rgb(0, 208, 130);
    color: black;
    transform: scale(1.3);
    border-radius: 7%;
  }
`;

const YesButtonWrapper = styled.div``;

const YesButton = styled.button`
  background-color: #f54848;
  color: #e8dcdc;
  border: none;
  border-radius: 5%;
  padding: 0.2vw;
  font-size: 0.9vw;
  font-weight: 800;
  :hover {
    cursor: pointer;
    background-color: rgb(0, 208, 130);
    color: black;
    transform: scale(1.3);
    border-radius: 7%;
  }
`;
