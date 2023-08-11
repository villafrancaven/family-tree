import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export function DetailsRow({ children }) {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Stack>
  );
}

export function DetailsLabel({ children }) {
  return <Typography sx={{ color: "#555555" }}>{children}</Typography>;
}

DetailsRow.propTypes = { children: PropTypes.node.isRequired };
DetailsLabel.propTypes = { children: PropTypes.node.isRequired };
