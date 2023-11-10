import React, { useState } from "react";
import styles from "./MypageView.module.scss";
import Header from "../component/Header";
import Toggles from "../component/Toggles";

export default function MyPageView() {
  const [selectedHobby, setSelectedHobby] = useState(15);
  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top_section}>
            <div className={styles.profile_wrapper}>
              <img
                src=""
                alt="user profile"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src = "user_profile.png";
                }}
              />
            </div>
            <table>
              <tr>
                <td>
                  <b>이름</b>
                </td>
                <td>김지희</td>
                <td>
                  <b>성별</b>
                </td>
                <td>여자</td>
              </tr>
              <tr>
                <td>
                  <b>전화번호</b>
                </td>
                <td>010-3223-6902</td>
                <td>
                  <b>ID</b>
                </td>
                <td>ddldnjsgur</td>
              </tr>
            </table>
          </div>
          <div className={styles.mid_section}>
            <h3>취미 선택</h3>
            <div className={styles.hobbywrapper}>
              <Toggles
                attrs={[
                  "강아지",
                  "독서",
                  "피아노",
                  "자기계발",
                  "게임",
                  "보드게임",
                  "운동",
                ]}
                state={selectedHobby}
                setState={setSelectedHobby}
              />
            </div>
            <h3>
              상태 메시지<span>&nbsp;&nbsp;(공백 포함 15자 이내)</span>
            </h3>
            <input type="text" maxLength="15"></input>
          </div>
          <div className={styles.btnswrapper}>
            <div>
              <button type="button">기본 정보 수정하기</button>
              <button type="button">비밀번호 수정하기</button>
            </div>
            <div>
              <button type="button">회원 탈퇴하기</button>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <form>
            <div>
              <p>기존 비밀번호</p>
              <input type="password" id="pw" name="pw" />
            </div>
            <div className={styles.col}>
              <div>
                <p>변경 비밀번호</p>
                <input type="password" id="modified" name="modified" />
              </div>
              <div>
                <p>변경 비밀번호</p>
                <input type="password" id="confirm" name="confirm" />
              </div>
            </div>
            <button type="submit">비밀번호 수정하기</button>
          </form>
        </div>
      </div>
    </>
  );
}
