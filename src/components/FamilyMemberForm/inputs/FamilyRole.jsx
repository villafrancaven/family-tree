import { FormControl, Input, InputLabel } from "@mui/material";
import { useFormContext } from "react-hook-form";

function FamilyRole() {
  const { register } = useFormContext();

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="family-role">Role</InputLabel>
      <Input
        {...register("familyRole")}
        id="family-role"
        placeholder="Enter Role"
      />
    </FormControl>
  );
}

export default FamilyRole;
