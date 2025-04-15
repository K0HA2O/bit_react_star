import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import Component1 from './page/연습/Component1';
import Component2 from './page/연습/Component2';
import Component3 from './page/연습/Component3';
import Component4 from './page/연습/Component4';
import Component5 from './page/연습/Component5';
import Component6 from './page/연습/Component6';

import 계산기 from './page/연습/계산기';
import 다크모드 from './page/연습/다크모드';

import Axios1 from './page/axios/axios1';
import Axios2 from './page/axios/axios2';

import ItemBox from './page/axios/itemBox';

import UseEffect1 from './page/useHock/useEffect';
import Callback1 from './page/useHock/useCallBack/Parent';
import Memo1 from './page/useHock/useMemo/Memo1';

import Reducer1 from './page/reducer1';
import Resucer_before from './page/reducer1_before';

import Redux1 from './page/redux1/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <헤더 />

        <Routes>

          <Route path={"/"} element={<Start />}></Route>

          <Route path={"/component1"} element={<Component1 />}></Route>
          <Route path={"/component2"} element={<Component2 />}></Route>
          <Route path={"/component3"} element={<Component3 />}></Route>
          <Route path={"/component4"} element={<Component4 />}></Route>
          <Route path={"/component5"} element={<Component5 />}></Route>
          <Route path={"/component6"} element={<Component6 />}></Route>

          <Route path={"/calc"} element={<계산기 />}></Route>
          <Route path={"/darkMode"} element={<다크모드 />}></Route>

          <Route path={"/axios1"} element={<Axios1 />}></Route>
          <Route path={"/axios2"} element={<Axios2 />}></Route>

          <Route path={"/itemBox"} element={<ItemBox />}></Route>

          <Route path={"/useEffect1"} element={<UseEffect1 />}></Route>
          <Route path={"/callback1"} element={<Callback1 />}></Route>
          <Route path={"/memo1"} element={<Memo1 />}></Route>

          <Route path={"/reducer1"} element={<Reducer1 />}></Route>
          <Route path={"/reducer1_before"} element={<Resucer_before />}></Route>

          <Route path={"/redux1"} element={<Redux1 />}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

function Start () {

  const movePage = useNavigate();

  return (
    <div>

      <input type="button" value="Component1"
        onClick={() => {
          movePage('component1');
        }} />
      <input type="button" value="Component2"
        onClick={() => {
          movePage('component2');
      }} />
      <input type="button" value="Component3"
        onClick={() => {
          movePage('component3');
        }} />
      <input type="button" value="Component4"
        onClick={() => {
          movePage('component4');
        }} />
      <input type="button" value="Component5"
        onClick={() => {
          movePage('component5');
        }} />
      <input type="button" value="Component6"
        onClick={() => {
          movePage('component6');
        }} /><br />

      <input type="button" value="계산기"
        onClick={() => {
          movePage('calc');
        }} /><br />

      <input type="button" value="다크모드"
        onClick={() => {
          movePage('darkMode');
        }} /><br />

      <input type="button" value="AXIOS1"
        onClick={() => {
          movePage('axios1');
        }} />
      <input type="button" value="AXIOS2"
        onClick={() => {
          movePage('axios2');
        }} /><br />

      <input type="button" value="아이템박스"
        onClick={() => {
          movePage('itemBox');
        }} /><br />

      <input type="button" value="UseEffect1"
        onClick={() => {
          movePage('useEffect1');
        }} /><br />

      <input type="button" value="UseCallBack1"
        onClick={() => {
          movePage('callback1');
        }} /><br />

      <input type="button" value="UseMemo1"
        onClick={() => {
          movePage('memo1');
        }} /><br />

      <input type="button" value="Reducer1"
        onClick={() => {
          movePage('reducer1');
        }} />
      <input type="button" value="Reducer1_before"
        onClick={() => {
          movePage('reducer1_before');
        }} /><br />

      <input type="button" value="Redux1"
        onClick={() => {
          movePage('redux1');
        }} />

    </div>
  )
}

function 헤더() {

  const movePage = useNavigate();

  return (
    <div>
      <h1 
        style={{
          cursor: 'pointer'
        }}
        onClick={
          () => movePage('/')
      }>Home으로 이동</h1>
    </div>
  )
}

export default App;
