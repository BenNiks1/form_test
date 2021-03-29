import React from "react";
import { Input } from "../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { RightArrowSvg } from "../icons";

const schema = yup.object().shape({
  name: yup.string().required("empty"),
  cardNumber: yup.string().required("empty"),
  expirationDate: yup.string().required("empty"),
  cvv: yup.string().required("empty"),
});

export const Payment = () => {
  const { data, setValues } = useData();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      name: data.name,
      cardNumber: data.cardNumber,
      expirationDate: data.expirationDate,
      cvv: data.cvv,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  
  const onSubmit = (data) => {
    history.push("/result");
    setValues(data);
  };
  return (
    <div className="container">
    <nav className='nav'>
      <Link to='/' className='nav__link '>Доставка</Link>
      <i className='nav__icon'><RightArrowSvg /></i>
      <Link to='/payment' className='nav__link active'>Оплата</Link>
      </nav>
      <h2 className="title">Оплата</h2>
      <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          title={"Имя на карте"}
          ref={register}
          id={"name"}
          name={"name"}
          placeholder={"Ivan Ivanov"}
          type={"text"}
          error={errors.name}
        />
        <Input
          title={"Номер карты"}
          ref={register}
          id={"cardNumber"}
          name={"cardNumber"}
          placeholder={"XXXX XXXX XXXX XXXX"}
          type={"text"}
          error={errors.cardNumber}
        />
        <div className="form__wrapper payment">
          <Input
            title={"Срок"}
            ref={register}
            id={"expirationDate"}
            name={"expirationDate"}
            placeholder={"MM/YY"}
            type={"text"}
            error={errors.expirationDate}
          />

          <Input
            title={"CVV"}
            ref={register}
            id={"cvv"}
            name={"cvv"}
            placeholder={""}
            type={"text"}
            error={errors.cvv}
          />
        </div>

        <button className="form__btn" type="submit">
          Оплатить
        </button>
      </form>
    </div>
  );
};
