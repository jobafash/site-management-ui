// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setLogin } from "../state";

// const initialValuesRegister = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: ""
//   };
  
// const initialValuesLogin = {
//     email: "",
//     password: ""
// };

// const registerSchema = yup.object().shape({
//     firstName: yup.string().required("required"),
//     lastName: yup.string().required("required"),
//     email: yup.string().email("invalid email").required("required"),
//     password: yup.string().required("required")
//   });
  
// const loginSchema = yup.object().shape({
//     email: yup.string().email("invalid email").required("required"),
//     password: yup.string().required("required"),
// });
  
// const LoginPage = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");
//   const [pageType, setPageType] = useState("login");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isLogin = pageType === "login";

//   const login = async (values, onSubmitProps) => {
//     const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(values),
//     });
//     const loggedIn = await loggedInResponse.json();
//     onSubmitProps.resetForm();
//     if (loggedIn) {
//       dispatch(
//         setLogin({
//           user: loggedIn.user,
//           token: loggedIn.token,
//         })
//       );
//       navigate("/dashboard");
//     }
//   };

//   const handleFormSubmit = async (values, onSubmitProps) => {
//     if (isLogin) await login(values, onSubmitProps);
//     // if (isRegister) await register(values, onSubmitProps);
//   };

//   return (
//     <Box m="20px">
//       <Header title="SIGN IN" subtitle="Sign in to your account" />

//       <Formik
//         onSubmit={handleFormSubmit}
//         initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
//         validationSchema={isLogin ? loginSchema : registerSchema}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//               sx={{
//                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//               }}
//             >
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Email"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.email}
//                 name="email"
//                 error={!!touched.email && !!errors.email}
//                 helperText={touched.email && errors.email}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="password"
//                 label="Password"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.password}
//                 name="password"
//                 error={!!touched.password && !!errors.password}
//                 helperText={touched.password && errors.password}
//                 sx={{ gridColumn: "span 4" }}
//               />
//             </Box>
//             <Box display="flex" justifyContent="end" mt="20px">
//               <Button type="submit" color="secondary" variant="contained">
//                 Login
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// // const phoneRegExp =
// //   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// // const checkoutSchema = yup.object().shape({
// //   email: yup.string().email("invalid email").required("required"),
// //   password: yup.string().required("required"),
// // });
// // const initialValues = {
// //   email: "",
// //   password: ""
// // };

// export default LoginPage;