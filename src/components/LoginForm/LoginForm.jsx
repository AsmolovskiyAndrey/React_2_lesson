import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  login: '',
  password: '',
  products: '',
};

const products = ['Sweater', 'Sofa', 'Box'];

let schema = yup.object().shape({
  login: yup.string().required('Введите хотя-бы один символ'),
  password: yup.string().min(6).max(16).required('Введите от 6 до 16 символов'),
  products: yup
    .string()
    .required('Введите из списка продуктов')
    .oneOf(products),
});

export const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Field type="text" name="login" />
          <ErrorMessage name="login" />
        </label>
        <br />
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </label>
        <br />
        <label htmlFor="products">
          Products
          <Field type="text" name="products" />
          <ErrorMessage name="products" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
