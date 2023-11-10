import React from "react";
import styles from "./LoginView.module.scss";
import { Link } from "react-router-dom";

import { loginSubmit } from "../query/query";

export default function LoginView() {
  // const idSelector = useSelector((state) => state.userdata.ID);
  // const dispatch = useDispatch();

  // const loginButtonHandlr = (e) => {
  //   e.preventDefault();
  //   console.log(_form_ref.current.id.value);
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    Object.fromEntries(formdata);
    loginSubmit({
      id: formdata.get("id"),
      pw: formdata.get("pw")
    }, e.target);
  };
  return (
    <div className={styles.LoginView}>
      <h1>
        취미가 필요할 땐? &nbsp;&nbsp; <big>잇다!</big>
      </h1>
      <div>
        <form
          action=""
          method="post"
          className={`${styles.hrAlign} ${styles.form}`}
          onSubmit={onSubmitHandler}
        >
          <input
            className={styles.inputbox}
            type="text"
            id="id"
            name="id"
            placeholder="아이디 입력"
            required
          ></input>
          <input
            className={styles.inputbox}
            type="password"
            id="pw"
            name="pw"
            placeholder="비밀번호 입력"
            required
          ></input>
          <button type="submit" className={styles.btn}>
            로그인
          </button>
        </form>
      </div>
      <div className={styles.linkarea}>
        <a href="/signup">회원가입</a>
        <div className={styles.hrflex}>
          <Link to="/login/IdRecovery">아이디찾기</Link>
          <div className={styles.line}></div>
          <Link to="/login/PwdRecovery">비밀번호찾기</Link>
        </div>
      </div>
    </div>
  );
}
