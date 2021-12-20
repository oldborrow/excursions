import React, { Component } from 'react';
import { Formik } from 'formik';
import { Input, Button } from "antd";
import { addNewArticle } from "../client";

const InputBottomMargin = {marginBottom: '5px'};

class AddArticleForm extends  Component {
    render () {
        return (
                <Formik
                    initialValues={{ title: '', content: '' }}
                    onSubmit={(article, { setSubmitting }) => {
                        addNewArticle(article).then(() => {
                            this.props.onSuccess();
                            setSubmitting(false);
                        })

                    }}
                    validate={values => {
                        let errors = {};

                        if (!values.title) {
                            errors.title = 'Title required'
                        }

                        if (!values.content) {
                            errors.content = 'Content required'
                        }

                        return errors;
                    }}
                >

                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          submitForm,
                          isValid
                          /* and other goodies */
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <Input
                                style={InputBottomMargin}
                                name="title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                                placeholder={'Title of new article'}
                            />
                            {errors.title && touched.title && errors.title}
                            <Input
                                style={InputBottomMargin}
                                name="content"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.content}
                                placeholder={'Contents'}
                            />
                            {errors.content && touched.content && errors.content}
                            <Button onClick={() => submitForm()} type="submit" disabled={isSubmitting | (touched && !isValid)}>
                                Submit
                            </Button>
                        </form>
                    )}
                </Formik>
        )
    }
}

export default AddArticleForm;