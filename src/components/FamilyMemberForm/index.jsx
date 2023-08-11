"use client";
import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Stack } from "@mui/material";
import { FAMILY_MEMBER_YUP_RESOLVER } from "./constants";
import FirstName from "./inputs/FirstName";
import LastName from "./inputs/LastName";
import FamilyRole from "./inputs/FamilyRole";
import BirthDate from "./inputs/BirthDate";
import Email from "./inputs/Email";
import useFormServices from "@component/custom-hook/useFormServices";

function FamilyMemberForm({ isEdit, handleCancel, data }) {
  const { handleAddMember, handleEditMember } = useFormServices();
  const { id } = data;

  const familyMemberFormMethods = useForm({
    defaultValues: data,
    mode: "onChange",
    resolver: FAMILY_MEMBER_YUP_RESOLVER,
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = familyMemberFormMethods;

  const onAddFamily = (formData) => {
    handleAddMember(formData);
    familyMemberFormMethods.reset(data);
  };

  const onFormEdit = (formData) => {
    handleEditMember(id, formData);
    handleCancel();
  };

  const onFormSubmit = isEdit ? onFormEdit : onAddFamily;

  return (
    <FormProvider {...familyMemberFormMethods}>
      <Stack
        onSubmit={handleSubmit(onFormSubmit)}
        component="form"
        spacing={2.5}
        sx={{
          mt: "24px",
          width: "450px",
          border: "1px solid #9E9FA5",
          borderRadius: "8px",
          p: "24px",
        }}
      >
        <FirstName />
        <LastName />
        <FamilyRole />
        <BirthDate />
        <Email />

        <Button type="submit" disabled={!isValid} variant="contained">
          {isEdit ? "Edit Details" : "Add Family"}
        </Button>
        {isEdit && (
          <Button variant="contained" onClick={handleCancel}>
            Cancel
          </Button>
        )}
      </Stack>
    </FormProvider>
  );
}

FamilyMemberForm.propTypes = {
  isEdit: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func,
  data: PropTypes.instanceOf(Object),
};

FamilyMemberForm.defaultProps = {
  handleCancel() {},
  data: {
    firstName: "",
    lastName: "",
    familyRole: "",
    birthDate: "",
    email: "",
    id: null,
  },
};

export default FamilyMemberForm;
