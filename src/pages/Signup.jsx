import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Container from "@mui/material/Container";

import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { useUser } from "../contexts/auth";

function SignUp() {
  const { signupUser } = useUser();
  const initialValues = {
    email: "",
    password: "",
    repeatPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Can't be empty"),
    password: Yup.string()
      .min(8, "Min of 8 characters")
      .required("Can't be empty"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password doesn't match")
      .required("Can't be empty"),
  });

  const onSubmit = (values, { resetForm }, onSubmitProps) => {
    try {
      const res = signupUser(values);
      onSubmitProps?.setSubmitting(false);

      resetForm();
    } catch (err) {
      onSubmitProps?.setSubmitting(false);
      resetForm();
      alert(err.message);
    }
  };

  return (
    <Container className="pt-[10vh]">
      <div className="flex justify-center items-center">
        <Logo />
      </div>

      <div className="max-w-[400px] mx-auto my-[5vh] bg-semiDarkBlue p-[32px] rounded-[20px]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            isSubmitting,
            touched,
            setFieldTouched,
          }) => (
            <form onSubmit={handleSubmit}>
              <Heading size={1}>SignUp</Heading>

              <div
                aria-label="form-fields"
                className="mt-[32px] mb-[40px] flex flex-col gap-[24px]"
              >
                <InputField
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched("email")}
                  errorMessage={touched.email && errors.email}
                />

                <InputField
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched("password")}
                  errorMessage={touched.password && errors.password}
                />

                <InputField
                  type="password"
                  name="repeatPassword"
                  id="repeatPassword"
                  placeholder="Repeat password"
                  value={values.repeatPassword}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched("repeatPassword")}
                  errorMessage={touched.repeatPassword && errors.repeatPassword}
                />
              </div>

              <Button type="submit" className="btn btn--full mb-[24px]">
                {isSubmitting ? "Signing up..." : "Create an account"}
              </Button>

              <p className="desc-m text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-red">
                  Login
                </Link>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default SignUp;
