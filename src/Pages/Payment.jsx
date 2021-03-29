import React from "react";
import { Input } from "../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fio: yup
    .string()
    .matches(/^([^0-9*])$/, "Should not contain numbers")
    .required("empty"),
  city: yup.string().required("empty"),
  address: yup.string().required("empty"),
  index: yup.string().required("empty"),
});

export const Payment = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  return (
    <div className="container">
      <h2 className="title">Оплата</h2>
      <form action="#" className="form">
        <Input
          title={"Имя на карте"}
          ref={register}
          id={"name"}
          name={"name"}
          placeholder={"Ivan Ivanov"}
          type={"text"}
          error={!!errors.name}
          helpertext={errors?.name?.message}
        />
        <Input
          title={"Номер карты"}
          ref={register}
          id={"cardNumber"}
          name={"cardNumber"}
          placeholder={"XXXX XXXX XXXX XXXX"}
          type={"text"}
          error={!!errors.cardNumber}
          helpertext={errors?.cardNumber?.message}
        />
        <Input
          title={"Срок"}
          ref={register}
          id={"expirationDate"}
          name={"expirationDate"}
          placeholder={"Срок"}
          type={"text"}
          error={!!errors.expirationDate}
          helpertext={errors?.expirationDate?.message}
        />
        
        <Input
          ref={register}
          id={"cvv"}
          name={"cvv"}
          placeholder={"CVV"}
          type={"text"}
          error={!!errors.cvv}
          helpertext={errors?.cvv?.message}
        />
        <button className='form__btn' type="submit">Оплатить</button>
      </form>
    </div>
  );
};
