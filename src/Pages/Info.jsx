import React from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";

const schema = yup.object().shape({
  fio: yup
    .string()
    .matches(/^([^0-9*])$/, "Should not contain numbers")
    .required("empty"),
  city: yup.string().required("empty"),
  address: yup.string().required("empty"),
  index: yup.string().required("empty"),
});
export const Info = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push("/payment");
  };
  return (
    <div className="container">
      <h2 className="title">Информация для доставки</h2>
      <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          title={"Получатель"}
          ref={register}
          id={"fio"}
          name={"fio"}
          placeholder={"ФИО"}
          type={"text"}
          error={!!errors.fio}
          helpertext={errors?.fio?.message}
        />
        <Input
          title={"Адресс"}
          ref={register}
          id={"city"}
          name={"city"}
          placeholder={"Город"}
          type={"text"}
          error={!!errors.city}
          helpertext={errors?.city?.message}
        />
        <Input
          ref={register}
          id={"address"}
          name={"address"}
          placeholder={"Адрес"}
          type={"text"}
          error={!!errors.address}
          helpertext={errors?.address?.message}
        />
        <div className="form__wrapper">
          <Select
            name={"country"}
            id={"country"}
            ref={register}
            defaultValue={"default"}
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
            error={!!errors.index}
            helpertext={errors?.index?.message}
          />
        </div>

        <button className="form__btn" type="submit">
          Продолжить
        </button>
      </form>
    </div>
  );
};
