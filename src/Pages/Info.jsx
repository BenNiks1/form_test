import React from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { useData } from "../DataContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {RightArrowSvg} from '../icons'

const schema = yup.object().shape({
  fio: yup.string().required("empty"),
  city: yup.string().required("empty"),
  address: yup.string().required("empty"),
  index: yup.string().required("empty"),
});
export const Info = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      fio: data.fio,
      city: data.city,
      address: data.address,
      index: data.index,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  console.log(errors);
  const onSubmit = (data) => {
    history.push("/payment");
    setValues(data);
  };
  return (
    <div className="container">
      <nav className='nav'>
      <Link to='/' className='nav__link active'>Доставка</Link>
      <i className='nav__icon'><RightArrowSvg /></i>
      <Link to='#' className='nav__link '>Оплата</Link>
      </nav>
      <h2 className="title">Информация для доставки</h2>
      <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          title={"Получатель"}
          ref={register}
          id={"fio"}
          name={"fio"}
          placeholder={"ФИО"}
          type={"text"}
          error={errors.fio}
          
        />
        <Input
          title={"Адресс"}
          ref={register}
          id={"city"}
          name={"city"}
          placeholder={"Город"}
          type={"text"}
          error={errors.city}
          helperText={errors.fio}
        />
        <Input
          ref={register}
          id={"address"}
          name={"address"}
          placeholder={"Адрес"}
          type={"text"}
          error={errors.address}
        />
        <div className="form__wrapper">
          <Select
            name={"country"}
            id={"country"}
            ref={register}
            defaultValue={"default"}
            error={errors.address}
            options={[
              {
                id: "vV5N5mzh20",
                value: "Страна",
                disabled: true,
                defaultValue: "default",
              },
              { id: "XoiQNHUW0I", value: "Россия", disabled: false },
              { id: "rNOg5cyRZQ", value: "Украина", disabled: false },
              { id: "jEZqsX0a5E", value: "Беларусь", disabled: false },
            ]}
          />
          <Input
            ref={register}
            id={"index"}
            name={"index"}
            placeholder={"Индекс"}
            type={"text"}
            error={errors.index}
          />
        </div>

        <button className="form__btn" type="submit">
          Продолжить
        </button>
      </form>
    </div>
  );
};
