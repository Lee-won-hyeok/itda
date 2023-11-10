import React, { useMemo } from "react";
import styles from "./Header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCategoryKeyAction } from "../states/action";
import { logout } from "../query/query";

export default function Header() {
  const data = useMemo(
    () => [
      {
        name: "모임찾기",
        href: "/search",
      },
      {
        name: "내 모임",
        href: "/mygroup",
      },
      {
        name: "마이 페이지",
        href: "/mypage",
      },
    ],
    []
  );
  const selector = useSelector((state) => state.categoryKey);
  const dispatch = useDispatch();
  const logoutOnClick = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>잇다!</h1>
        <div>
          <span>{data[selector].name}</span>
        </div>
      </div>
      <div className={styles.menus}>
        {data.map((i, idx) => (
          <div key={idx}>
            <Link
              to={i.href}
              onClick={() => {
                dispatch(setCategoryKeyAction(idx));
              }}
            >
              {i.name}
            </Link>
          </div>
        ))}
        <div>
          <a onClick={logoutOnClick} href="/">
            로그아웃
          </a>
        </div>
      </div>
    </div>
  );
}
