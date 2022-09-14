import React from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"


const Forms = () => {
    // const formik = useFormik({
    //     initialValues: {
    //         firstname:"",
    //         lastname:"",
    //         email: ""
    //     }, 
    //     validationSchema: Yup.object({
    //         firstname: Yup.string().max(15, "firstname should not be more than 15").required("Required"),
    //         lastname: Yup.string().max(15, "lastname should not be nore than 15").required("Required") ,
    //         email: Yup.string().email("invalid email address").required("Required")
    //     }),
    //     onSubmit: values => {
    //         alert(JSON.stringify(values))
    //     }
    // })


  return (
    <Formik
    initialValues= {{
        firstname:"",
        lastname:"",
        email: ""
    }}
    validationSchema = {Yup.object({
        firstname: Yup.string().max(15, "firstname should not be more than 15").required("Required"),
        lastname: Yup.string().max(15, "lastname should not be nore than 15").required("Required") ,
        email: Yup.string().email("invalid email address").required("Required")
    })}
    onSubmit = {values => {
        alert(JSON.stringify(values))
    }}
    > 

    {formik => (
         <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstname">FirstName 
            <input
                id='firstname'
                name='firstname'
                type="text"
                onChange={formik.handleChange}
                onBlur ={formik.handleBlur}
                value={formik.values.firstname}
            />
        </label>
        {formik.touched.firstname && formik.errors.firstname ? <div> {formik.errors.firstname}</div> : null}
        <label htmlFor="lastname">LastName 
            <input
                id='lastname'
                name='lastname'
                type="text"
                {...formik.getFieldProps("lastname")} //note that getfieldprops  returns the group of onchange, onblur, value and checked
                // onChange={formik.handleChange}
                // onBlur ={formik.handleBlur}
                // value={formik.values.lastname}
            />
        </label>
        {formik.touched.lastname && formik.errors.lastname ? <div> {formik.errors.lastname} </div> : null}
        <label htmlFor="email">Email 
            <input
                id='email'
                name='email'
                type="email"
                onChange={formik.handleChange}
                onBlur ={formik.handleBlur}
                value={formik.values.email}
            />
        </label>
        {formik.touched.email && formik.errors.email ? <div> {formik.errors.email}</div> : null}
    <button type='submit'> Submit </button>
    </form>
    )}

    </Formik>
   
  )
}

export default Forms
