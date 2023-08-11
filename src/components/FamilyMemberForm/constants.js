import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

const DATE_REGEX = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

export const FAMILY_MEMBER_YUP_RESOLVER = yupResolver(
  yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    familyRole: yup.string().required(),
    birthDate: yup
      .string()
      .matches(DATE_REGEX, "Invalid date format (MM/DD/YYYY)")
      .required("Birthdate is required"),
    email: yup
      .string()
      .matches(EMAIL_REGEX, "Invalid email address")
      .required("Email is required"),
  })
);
