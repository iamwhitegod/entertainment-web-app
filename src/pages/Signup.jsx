import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Container from "@mui/material/Container";

import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function SignUp() {
  const initialValues = {
    email: "",
    password: "",
    repeatPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    repeatPassword: Yup.string().required(),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
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
          {({ values, handleChange, handleSubmit }) => (
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
                />

                <InputField
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />

                <InputField
                  type="password"
                  name="repeatPassword"
                  id="repeatPassword"
                  placeholder="Repeat password"
                  value={values.repeatPassword}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="btn btn--full mb-[24px]">
                Create an account
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
