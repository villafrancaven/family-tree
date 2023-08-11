import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import PropTypes from "prop-types";
import FamilyMemberForm from "../FamilyMemberForm";

function EditModal({ open, handleClose, data }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Details</DialogTitle>
      <DialogContent>
        <FamilyMemberForm isEdit handleCancel={handleClose} data={data} />
      </DialogContent>
    </Dialog>
  );
}

EditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default EditModal;
