import { useState, useEffect } from "react";
import "./App.css";
import LoginRouter from "./Router/LoginRouter";
import MainView from "./domain/MainView";
import NotFound from "./domain/NotFound";
import MyPageView from "./domain/MypageView";
import SignupView from "./domain/SignupVIew";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import store from "./states/store";
import { Provider } from "react-redux";

import { auth } from "./query/query";
import GroupView from "./domain/GroupView";
import SearchView from "./domain/SearchView";
import GroupDetailView from "./domain/GroupDetailView";

const LOADING = 1;
const LOADED = 0;
const ERROR = -1;

function App() {
  useEffect(() => {
    setFetchState(LOADING);
    auth(setFetchState, LOADED, LOADED); //setFetchState, LOADED, ERROR
  }, []);
  const [fetchState, setFetchState] = useState(LOADING);
  return (
    <BrowserRouter>
      <Provider store={store}>
        {fetchState === LOADED && (
          <Routes>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/" element={<MainView />}></Route>
            <Route path="/login/*" element={<Navigate to="/" />}></Route>
            <Route path="/signup" element={<SignupView />}></Route>
            <Route path="/mypage" element={<MyPageView />}></Route>

            
            <Route path="/group" element={<GroupView />}></Route>
            <Route path="/search" element={<SearchView />}></Route>
            <Route path="/group/:id" element={<GroupDetailView />}></Route>
          </Routes>
        )}
        {fetchState === ERROR && (
          <Routes>
            <Route path="/login/*" element={<LoginRouter />}></Route>
            <Route path="/signup" element={<SignupView />}></Route>
            <Route path="*" element={<Navigate to="/login" />}></Route>
          </Routes>
        )}
        {fetchState === LOADING && <>LOADING...</>}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
