import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";

import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Logo from "../components/Logo";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
  };

  return (
    <Container className="pt-[10vh]">
      <div className="flex justify-center items-center">
        <Logo />
      </div>

      <div className="max-w-[400px] mx-auto my-[7vh] bg-semiDarkBlue p-[32px] rounded-[20px]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Heading size={1}>Login</Heading>

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
              </div>

              <Button type="submit" className="btn btn--full mb-[24px]">
                Login to your account
              </Button>

              <p className="desc-m text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-red">
                  SignUp
                </Link>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default Login;
