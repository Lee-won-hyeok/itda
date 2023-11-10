import React, { useState } from "react";
import styles from "./SignupView.module.scss";
import {
  duplicateCheckId,
  mobileAuth,
  signup,
  mobileCert,
} from "../query/query";

export default function SignupView() {
  const [idChecked, setIdChecked] = useState(0);
  const [mobileCerted, setMobildCerted] = useState(false);
  const [pw, setPw] = useState("");
  const [confpw, setConfpw] = useState("");

  const pwRegexCheck = (pw) => {
    const regex = /[a-zA-Z!@#$%]{8,14}/;
    return pw.match(regex) && pw.match(regex)[0] === pw;
  };
  const onSubmitHandlr = (e) => {
    e.preventDefault();
    if (!idChecked) {
      window.scrollTo(
        0,
        window.pageYOffset + document.forms[0].id.getBoundingClientRect().top
      );
      return;
    }
    if (pw !== confpw) {
      window.scrollTo(
        0,
        window.pageYOffset + document.forms[0].pw.getBoundingClientRect().top
      );
      return;
    }
    if (!mobileCerted) {
      window.scrollTo(
        0,
        window.pageYOffset +
          document.forms[0].phonenum.getBoundingClientRect().top
      );
      return;
    }
    const formdata = new FormData(e.target);
    const iter = formdata.entries();
    const obj = {};
    for (const i of iter) {
      if (i[0] !== "confpw") obj[i[0]] = i[1];
    }
    signup(obj);
  };
  return (
    <>
      <form
        className={styles.wrapper}
        onSubmit={onSubmitHandlr}
        name="signup"
        acceptCharset="utf-8"
      >
        <div className={styles.cont}>
          <label className={styles.r} htmlFor="name">
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="이름을 입력해주세요"
            autoFocus
            required
          />
        </div>
        <div className={styles.cont}>
          <label className={`${styles.r} ${styles.labelWr}`} htmlFor="gender">
            성별
          </label>
          <input
            type="radio"
            id="gender1"
            name="gender"
            value="true"
            required
          />
          <span>남자</span>
          <input
            className={styles.ml}
            type="radio"
            id="gender2"
            name="gender"
            value="false"
            required
          />
          <span>여자</span>
        </div>
        <div className={styles.cont}>
          <label className={styles.r} htmlFor="age">
            나이
          </label>
          <select name="age" id="age" required>
            <option value="" selected disabled>
              나이를 선택해주세요
            </option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <div className={styles.cont}>
          <label className={styles.r} htmlFor="id">
            아이디
          </label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="아이디를 입력해주세요"
            required
          />
          <button
            type="button"
            onClick={(e) =>
              duplicateCheckId(document.forms[0].id.value, setIdChecked)
            }
            className={`${styles.btn} ${styles.sm} ${styles.ml}`}
          >
            중복확인
          </button>
        </div>
        {idChecked ? (
          <p className={styles.conf}>* 사용 가능한 아이디입니다.</p>
        ) : (
          <p className={styles.warn}>* 아이디 중복체크가 필요합니다.</p>
        )}
        <div className={styles.cont}>
          <label className={styles.r} htmlFor="pw">
            비밀번호
          </label>
          <input
            type="password"
            id="pw"
            name="pw"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
            placeholder="비밀번호를 입력해주세요"
            maxLength="14"
            required
          />
        </div>
        {!pwRegexCheck(pw) && (
          <p className={styles.warn}>
            * 영어, 숫자, !@#$%를 포함하여 8~14자로 작성해주세요.
          </p>
        )}
        <div className={styles.cont}>
          <label className={styles.r} htmlFor="confpw">
            비밀번호 재확인
          </label>
          <input
            type="password"
            id="confpw"
            name="confpw"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => setConfpw(e.target.value)}
            value={confpw}
            maxLength="14"
            required
          />
        </div>
        {pw !== confpw && (
          <p className={styles.warn}>* 비밀번호가 일치하지 않습니다.</p>
        )}
        <hr></hr>
        <div className={styles.cont}>
          <label className={styles.r} htmlFor="phonenum">
            전화번호
          </label>
          <input
            type="text"
            id="phonenum"
            name="phonenum"
            placeholder="전화번호를 입력해주세요"
            required
          />
          <button
            type="button"
            onClick={(e) => mobileAuth(document.forms[0].phonenum.value)}
            className={`${styles.btn} ${styles.sm} ${styles.ml}`}
          >
            인증하기
          </button>
        </div>
        <div className={styles.cont}>
          <label className={styles.r} name=""></label>
          <input
            type="text"
            id="auth"
            name="auth"
            placeholder="인증번호를 입력해주세요"
            required
          />
          <button
            type="button"
            onClick={(e) =>
              mobileCert(document.forms[0].auth.value, setMobildCerted)
            }
            className={`${styles.btn} ${styles.sm} ${styles.ml}`}
          >
            확인
          </button>
        </div>
        {!mobileCerted && (
          <p className={styles.warn}>* 이미 가입이력이 있는 전화번호입니다.</p>
        )}
        <div className={styles.terms}>
          <div>
            <span>이용약관 동의</span>
            <input type="checkbox" required value={false}></input>
          </div>

          <p>
            길지 아니한 목숨을 사는가 싶이 살았으며 그들의 그림자는 천고에
            사라지지 않는 것이다 이것은 현저하게 일월과 같은 예가 되려니와 그와
            같지 못하다 할지라도 창공에 반짝이는 뭇 별과 같이 산야에 피어나는
            군영과 같이 이상은 실로 인간의 부패를 방지하는 소금이라 할지니
            인생에 가치를 주는 원질이 되는 것이다 그들은 앞이 긴지라 착목한는
            곳이 원
          </p>
          <div>
            <span>개인정보 수집 및 이용 동의</span>
            <input type="checkbox" required value={false}></input>
          </div>
          <p>
            길지 아니한 목숨을 사는가 싶이 살았으며 그들의 그림자는 천고에
            사라지지 않는 것이다 이것은 현저하게 일월과 같은 예가 되려니와 그와
            같지 못하다 할지라도 창공에 반짝이는 뭇 별과 같이 산야에 피어나는
            군영과 같이 이상은 실로 인간의 부패를 방지하는 소금이라 할지니
            인생에 가치를 주는 원질이 되는 것이다 그들은 앞이 긴지라 착목한는
            곳이 원
          </p>
          <button type="submit" className={`${styles.btn} ${styles.big}`}>
            회원가입
          </button>
        </div>
      </form>
    </>
  );
}
