import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

function BirthDate() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="birth-date">Birthday</InputLabel>
      <Input
        {...register("birthDate", { required: true })}
        id="birth-date"
        placeholder="MM/DD/YYYY"
      />
      {errors.birthDate && (
        <Typography sx={{ color: "#ff3333" }}>
          {errors.birthDate.message}
        </Typography>
      )}
    </FormControl>
  );
}

export default BirthDate;
