import React, { useState } from "react";
import styles from "./Recovery.module.scss";

import ModalView from "../component/ModalView";
import { mobileAuth, mobileCert, findId } from "../query/query";

export default function PwdRecovery() {
  const [mobileCerted, setMobileCerted] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!mobileCerted) {
      alert("전화번호 인증이 필요합니다.");
      return;
    }
    findId(new FormData(e.target), setModalActive);
  };
  return (
    <>
      <header className={styles.hd}>
        <h1>잇다!&nbsp;</h1>
        <p>아이디 찾기</p>
      </header>
      {modalActive && (
        <ModalView>
          <p className={styles.modal}>
            입력하신 정보와 <br /> 일치하는 회원이 없습니다.
          </p>
          <button
            onClick={() => setModalActive(false)}
            className={`${styles.btn} ${styles.wide}`}
          >
            OK
          </button>
        </ModalView>
      )}
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.col}>
            <label className={styles.r} name="username" htmlFor="username">
              이름
            </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              placeholder="이름을 입력하세요"
            />
          </div>
          <div className={styles.col}>
            <label className={styles.r} name="TEL" htmlFor="TEL">
              전화번호
            </label>
            <input
              type="text"
              name="TEL"
              id="TEL"
              required
              placeholder="전화번호를 입력하세요"
            />
            <button
              type="button"
              onClick={() => mobileAuth(document.forms[0].TEL.value)}
              className={`${styles.btn} ${styles.sm} ${styles.ml}`}
            >
              인증번호 전송
            </button>
          </div>
          <div className={styles.col}>
            <label className={styles.r} name=""></label>
            <input
              type="text"
              name="auth"
              id="auth"
              required
              placeholder="인증번호를 입력하세요"
            />
            <button
              type="button"
              onClick={() =>
                mobileCert(document.forms[0].auth.value, setMobileCerted)
              }
              className={`${styles.btn} ${styles.sm} ${styles.ml}`}
            >
              확인
            </button>
          </div>
          {mobileCerted ? (
            <p className={styles.conf}>* 인증되었습니다.</p>
          ) : (
            <p className={styles.warn}>* 휴대전화 인증이 필요합니다.</p>
          )}
          <button
            type="submit"
            className={`${styles.btn} ${styles.big} ${styles.mt}`}
          >
            아이디 찾기
          </button>
        </form>
      </div>
    </>
  );
}
