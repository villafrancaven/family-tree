import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

function Email() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="email">Email Address</InputLabel>
      <Input
        {...register("email", { required: true })}
        id="email"
        placeholder="example@example.com"
      />
      {errors.email && (
        <Typography sx={{ color: "#ff3333" }}>
          {errors.email.message}
        </Typography>
      )}
    </FormControl>
  );
}

export default Email;
