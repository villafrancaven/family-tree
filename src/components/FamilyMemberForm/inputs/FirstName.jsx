import { FormControl, Input, InputLabel } from "@mui/material";
import { useFormContext } from "react-hook-form";

function FirstName() {
  const { register } = useFormContext();

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="first-name">First Name</InputLabel>
      <Input
        {...register("firstName", { required: true })}
        id="first-name"
        placeholder="Enter Name"
      />
    </FormControl>
  );
}

export default FirstName;
