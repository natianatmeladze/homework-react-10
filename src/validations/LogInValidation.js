import { object, string } from "yup";

const schema = object({
  username: string()
    .required("username არის სავალდებულო ველი")
    .min(3, "username უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს")
    .max(15, "username უნდა შედგებოდეს მაქსიმუმ 15 სიმბოლოსგან"),
  email: string()
    .required("მეილი არის სავალდებულო ველი")
    .email("თქვენს მიერ შეყვანილი მეილი არ არის ვალიდური"),
  password: string()
    .required("პაროლი არის სავალდებულო ველი")
    .min(8, "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს")
    .matches(/[A-Z]/, 'პაროლი უნდა შეიცავდეს მინიმუმ 1 სიმბოლოს მაღალ რეგისტრში')
    .matches(/[a-z]/, 'პაროლი უნდა შეიცავდეს მინიმუმ 1 სიმბოლოს დაბალ რეგისტრში')
    .matches(/[0-9]/, 'პაროლი უნდა შეიცავდეს რიცხვს')    
    ,
});

export default schema;
