import { FormControl, Input, InputLabel } from "@mui/material";
import { useFormContext } from "react-hook-form";

function LastName() {
  const { register } = useFormContext();

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="last-name">Surname</InputLabel>
      <Input
        {...register("lastName", { required: true })}
        id="last-name"
        placeholder="Enter Surname"
      />
    </FormControl>
  );
}

export default LastName;
