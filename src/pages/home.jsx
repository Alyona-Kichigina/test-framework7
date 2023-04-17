import React, {useState} from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button, ListInput
} from 'framework7-react';

const HomePage = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [numberCar, setNumberCar] = useState('')


  return (
    <Page name="home">
      {/* Top Navbar */}
      <Navbar large sliding={false}>
        <NavLeft>
          <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
        </NavLeft>
        <NavTitle sliding>test-framework7</NavTitle>
        <NavRight>
          <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
        </NavRight>
        <NavTitleLarge>test-framework7</NavTitleLarge>
      </Navbar>

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
        <Button type="button">Submit</Button>
      </List>

      {/* Page content */}
      <Block>
        <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains independent view with its own routing and navigation.</p>

        <p>Each tab/view may have different layout, different navbar type (dynamic, fixed or static) or without navbar like this tab.</p>
      </Block>
      <BlockTitle>Navigation</BlockTitle>
      <List strong inset dividersIos>
        <ListItem link="/about/" title="About"/>
        <ListItem link="/form/" title="Form"/>
      </List>

      <BlockTitle>Modals</BlockTitle>
      <Block className="grid grid-cols-2 grid-gap">
        <Button fill popupOpen="#my-popup">Popup</Button>
        <Button fill loginScreenOpen="#my-login-screen">Login Screen</Button>
      </Block>

      <BlockTitle>Panels</BlockTitle>
      <Block className="grid grid-cols-2 grid-gap">
        <Button fill panelOpen="left">Left Panel</Button>
        <Button fill panelOpen="right">Right Panel</Button>
      </Block>

      <List strong inset dividersIos>
        <ListItem
          title="Dynamic (Component) Route"
          link="/dynamic-route/blog/45/post/125/?foo=bar#about"
        />
        <ListItem
          title="Default Route (404)"
          link="/load-something-that-doesnt-exist/"
        />
        <ListItem
          title="Request Data & Load"
          link="/request-and-load/user/123456/"
        />
      </List>
    </Page>
    )
};
export default HomePage;
