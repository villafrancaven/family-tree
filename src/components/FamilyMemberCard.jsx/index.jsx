import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { DetailsLabel, DetailsRow } from "./layout/FamilyMemberLayout";
import useFormServices from "@component/custom-hook/useFormServices";
import EditModal from "../EditModal";

function FamilyMemberCard({ data }) {
  const { handleDeleteMember } = useFormServices();
  const [expand, setExpand] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { firstName, lastName, familyRole, birthDate, email, id } = data;

  return (
    <Stack
      sx={{
        border: "1px solid #9E9FA5",
        borderRadius: "8px",
        p: "16px",
        width: "466px",
      }}
    >
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Box>
          <Typography>{firstName}</Typography>
          <Typography sx={{ color: "#919191", mt: "4px" }}>
            {familyRole}
          </Typography>
        </Box>
        <IconButton
          sx={{ transform: "translateY(-10%)", p: 0 }}
          onClick={() => setExpand((prev) => !prev)}
        >
          <Stack
            sx={({ transitions }) => ({
              transform: expand ? "rotate(-90deg)" : "rotate(0deg)",
              transition: transitions.create("transform", {
                duration: transitions.duration.short,
              }),
            })}
          >
            <Image src="/down.svg" alt="Down icon" width={18} height={18} />
          </Stack>
        </IconButton>
      </Stack>

      <Collapse in={expand}>
        <Divider sx={{ my: "15px", borderColor: "#C5C5C5" }} />
        <Stack spacing={1}>
          <DetailsRow>
            <DetailsLabel>Surname</DetailsLabel>
            <Typography>{lastName}</Typography>
          </DetailsRow>
          <DetailsRow>
            <DetailsLabel>Birth date</DetailsLabel>
            <Typography>{birthDate}</Typography>
          </DetailsRow>
          <DetailsRow>
            <DetailsLabel>Email</DetailsLabel>
            <Typography>{email}</Typography>
          </DetailsRow>
        </Stack>

        <Stack
          direction="row"
          spacing={3}
          sx={{ justifyContent: "center", mt: "24px" }}
        >
          <Button variant="contained" onClick={() => handleDeleteMember(id)}>
            Delete
          </Button>
          <Button
            variant="contained"
            onClick={() => setModalOpen((prev) => !prev)}
          >
            Edit
          </Button>
        </Stack>
      </Collapse>

      <EditModal
        open={modalOpen}
        handleClose={() => setModalOpen((prev) => !prev)}
        data={data}
      />
    </Stack>
  );
}

FamilyMemberCard.propTypes = { data: PropTypes.instanceOf(Object) };

FamilyMemberCard.defaultProps = {
  data: {
    firstName: "",
    lastName: "",
    familyRole: "",
    birthDate: "",
    email: "",
    id: null,
  },
};

export default FamilyMemberCard;
