import React, { useState } from "react";
import styles from "./GroupView.module.scss";
import Toggles from "../component/Toggles";
import Header from "../component/Header";
import Switch from "../component/Switch";
import LineMeter from "../component/LineMeter";
import Search from "../component/Search";
import useKakaomap from "../hooks/useKakaomap";

export default function GroupView() {
  const [selectedHobby, setSelectedHobby] = useState(15);
  const [activated, setActivated] = useState(false);
  const [min, setMin] = useState(4);
  const [max, setMax] = useState(80);
  const {mapElementRef: mapRef} = useKakaomap();

  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>모임 개설</h3>
          <form>
            <div className={styles.col}>
                <label htmlFor="name">모임 이름</label>
                <input
                type="text"
                placeholder="모임 이름을 입력해주세요 (최대 15자)"
                className={styles.input}
                ></input>
            </div>
            <p>취미 선택</p>
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
            <div className={styles.col}>
                <p>나이 제한</p>
                <Switch activated={activated} setActivated={setActivated} />
            </div>
            {activated && <LineMeter min={min} max={max} setMin={setMin} setMax={setMax} />}
            
            <label htmlFor="entry">정원(2~100명 입력 가능)</label>
            <input type="number" className={styles.input} id="entry" name="entry" />
            <span className={styles.p}>&nbsp;&nbsp;명</span>
            <p>모임 소개</p>
            <textarea className={styles.textarea} placeholder="내용을 입력해주세요" rows="5" />
            <p>모임 키워드</p>
            <textarea className={styles.textarea} placeholder="#을 이용해 모임의 특징을 소개해주세요(최대 5개))" rows="3"/>
            <p>대표 이미지</p>
            <input id="fileinput" className={styles.input} type="file" />
            <label htmlFor="fileinput">
              <div className={styles.fileuploader}>
                  {/* <img src="" alt="업로드" /> */}
                  <span class="material-symbols-outlined">upload</span>
                  <span className={styles.p}>모임 배너에 들어갈 이미지를 업로드해주세요.</span>
              </div>
            </label>
            <div className={styles.mapwrapper}>
                <p>모임 위치</p>
                <div className={styles.col}>
                    <div className={`${styles.fullw} ${styles.serachwrapper}`}>
                        <div className={styles.fullw}><Search /></div>
                    </div>
                    <div className={styles.map} ref={mapRef}></div>
                </div>
            </div>
            <div className={styles.btn}>
                <button type="submit">모임 만들기</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
