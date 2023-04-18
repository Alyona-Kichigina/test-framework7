import React, {useCallback, useEffect, useState} from 'react';
import {
  Page,
  List,
  Button, ListInput
} from 'framework7-react';
import axios from "axios";
import {useQuery} from 'react-query';

const HomePage = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [numberCar, setNumberCar] = useState('')

 // useEffect(() => {
 //   axios.get('http://localhost:5000/users').then((response) => {
 //     console.log(response)
 //   })
 // }, [])

  const click = useCallback(async () => {
    console.log(666)
    const {data} = await axios.post('http://localhost:5000/add-user',
      {
        name: "aaaa"
      })
  },[])

  const { isLoading, error, data } = useQuery(
    'repoData',
    () =>
      fetch(
        'http://localhost:5000/users'
      ).then((response) => response)
  );

  if (isLoading) return <p>Загрузка...</p>;

  if (error) return <p>Ошибка: {error.message}</p>;



  return (
    <Page name="home">
      <List form onSubmit={(e)=>console.log(e)}>
        <ListInput
          label="ФИО"
          type="text"
          placeholder="Ваше ФИО"
          required
          validate
          value={name}
          onChange={e => setName(e.target.value)}
         />

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
        <Button type="button" onClick={() => click()}>Submit</Button>
      </List>
    </Page>
    )
};
export default HomePage;
