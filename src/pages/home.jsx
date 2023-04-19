import React, {useCallback, useEffect, useState} from 'react';
import {
  Page,
  List,
  Button, ListInput
} from 'framework7-react';
import axios from "axios";
import {useQuery, useMutation, useQueryClient} from 'react-query';
import PhoneInput from 'react-phone-input-2'
import {Loading} from "./style"

const getUsers = async () => {
  return (await axios.get('http://localhost:5000/users'))
  .data;
}

const addUser = async (data) => {
  await axios.post('http://localhost:5000/users', data)
}

const HomePage = () => {
  const queryClient = useQueryClient();
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [numberCar, setNumberCar] = useState('')

  const {data, isLoading, error} = useQuery('users', getUsers)

  const mutation = useMutation((newUser) => addUser(newUser), {
    onSuccess: () => queryClient.invalidateQueries(["users"])
  })

  const onSubmit = useCallback(() => {
    mutation.mutate({ name, phone, number_var: numberCar } )
  }, [name, phone, numberCar])
  return (
    <Page name="home">
      {
        isLoading ? (
          <Loading>Загрузка...</Loading>
        )
        : (
          <>
            {/*{*/}
            {/*  mutation.isLoading && (<p>загрузка данных</p>)*/}
            {/*}*/}
            {/*{*/}
            {/*  mutation.isError && (<p>{mutation.error.message}</p>)*/}
            {/*}*/}
            {/*{*/}
            {/*  mutation.isSuccess && (<p>данные успешно добавлены</p>)*/}
            {/*}*/}
            <List form>
              <ListInput
                label="ФИО"
                type="text"
                placeholder="Ваше ФИО"
                required
                validate
                value={name}
                onChange={e => setName(e.target.value)}
              />

              {/*<PhoneInput*/}
              {/*  country={'ru'}*/}
              {/*  value={phone}*/}
              {/*  onChange={phone => setPhone( phone )}*/}
              {/*/>*/}
              <ListInput
                validate
                label="Номер телефона"
                type="tel"
                placeholder="Номер телефона"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <ListInput
                label="Номер автомобиля"
                type="email"
                placeholder="Номер автомобиля"
                value={numberCar}
                onChange={e => setNumberCar(e.target.value)}
              />
              <Button type="button" onClick={() => onSubmit()}>Submit</Button>
            </List>

            {data?.map(({name, phone, number_var, id}) => (
              <div key={id}>{id}. {name}: {phone} - {number_var}</div>
            ))}
          </>
        )
      }
    </Page>
    )
};
export default HomePage;
