import React, { useState, useMemo } from "react";
import styles from "./SearchView.module.scss";
import Header from "../component/Header";
import Search from "../component/Search";
import Card from "../component/Card";
import Modal from "../component/Modal";
import Switch from "../component/Switch";
import LineMeter from "../component/LineMeter";
import Toggles from "../component/Toggles";
import Paginator from "../component/Paginator";

export default function SearchView() {
  const [keyword, setKeyword] = useState("");
  const [viewtype, setViewtype] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [ageActive, setAgeActive] = useState(false);
  const [locationActive, setLocationActive] = useState(false);
  const [selectedHobby, setSelectedHobby] = useState(0);
  const [minAge, setMinAge] = useState(4);
  const [maxAge, setMaxAge] = useState(80);
  const [page, setPage] = useState(0);
  const hobbies = useMemo(
    () => [
      "강아지",
      "독서",
      "피아노",
      "게임",
      "운동",
      "고양이",
      "헬스",
      "산책",
    ],
    []
  );
  const data = useMemo(() => [
    {
      title: "화나면 걷는 모임1",
      desc: "3km/25~30",
      tags: ["색즉시공", "공즉시색", "공수래", "공수거"],
    },
    {
      title: "화나면 걷는 모임2",
      desc: "4km/25~30",
      tags: ["색즉시공", "공즉시색", "공수래", "공수거"],
    },
    {
      title: "화나면 걷는 모임3",
      desc: "5km/25~30",
      tags: ["색즉시공", "공즉시색", "공수래", "공수거"],
    },
    {
      title: "화나면 걷는 모임4",
      desc: "6km/25~30",
      tags: ["색즉시공", "공즉시색", "공수래", "공수거"],
    },
  ]);
  const onClickHandler = (e) => {
    setViewtype(true);
  };
  return (
    <>
      <Header />
      {viewtype ? (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.col}>
              <h3>
                <strong>#{keyword}</strong> 모임 검색 결과
              </h3>
              <div className={styles.filter}>
                <select defaultValue="0">
                  <option value="0">최근 개설 순</option>
                  <option value="1">인원 많은 순</option>
                </select>
                <button type="button" onClick={() => setModalActive(true)}>
                  필터 설정
                </button>
              </div>
            </div>
            <div className={styles.cardContainer}>
              {data.map((i) => (
                <div className={styles.cardwrapper}>
                  <Card title={i.title} text={i.desc} tags={i.tags} />
                </div>
              ))}
            </div>
            <div className={styles.pagination}>
                <Paginator size={4} index={page} setIndex={setPage}/>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <Search
              placeholder="관심있는 모임을 검색하세요."
              value={keyword}
              setValue={setKeyword}
              onClick={onClickHandler}
            />
          </div>
        </div>
      )}
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={styles.modal}>
          <div className={styles.col}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 48 48"
                data-svg-content="true"
                fill="rgb(255, 255, 255)"
              >
                <path d="M6 34v4h12v-4H6zm0-24v4h20v-4H6zm20 32v-4h16v-4H26v-4h-4v12h4zM14 18v4H6v4h8v4h4V18h-4zm28 8v-4H22v4h20zm-12-8h4v-4h8v-4h-8V6h-4v12z"></path>
              </svg>
            </div>
            <h3 className={styles.ml}>필터 설정</h3>
          </div>
          <div className={styles.col}>
            <span className={styles.p}>나이</span>
            <div className={`${styles.inline} ${styles.ml}`}>
              <Switch activated={ageActive} setActivated={setAgeActive} />
            </div>
          </div>
          {ageActive && (
            <div className={styles.linemeter}>
              <LineMeter
                min={minAge}
                setMin={setMinAge}
                max={maxAge}
                setMax={setMaxAge}
              />
            </div>
          )}

          <div className={styles.col}>
            <span className={styles.p}>취미 키워드</span>
          </div>

          <Toggles
            attrs={hobbies}
            state={selectedHobby}
            setState={setSelectedHobby}
          />
          <div className={styles.col}>
            <span className={styles.p}>지역</span>
            <div className={`${styles.inline} ${styles.ml}`}>
              <Switch
                activated={locationActive}
                setActivated={setLocationActive}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
