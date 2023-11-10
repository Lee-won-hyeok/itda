import React from "react";
import Header from "../component/Header";
import styles from "./MainView.module.scss";
import ImgCard from "../component/ImgCard";
import Card from "../component/Card";

export default function Main () {
    return <>
        <Header></Header>
        <div className={styles.container}>
            <h1 className={styles.mg}>잇다는 이런 서비스에요!</h1>
            <div className={styles.cardcontainer}>
                <div className={styles.ImgCard}>
                    <ImgCard title={"취미 기반 모임 지원"} desc={"나와 비슷한 취미를 가지고 있는 사람들과 모임 활동을 할 수 있어요."}/>
                </div>
                <div className={styles.ImgCard}>
                    <ImgCard title={"채팅형 모임 스타일"} desc={"채팅을 통해서 빠르고 쉽게 모임에 참여할 수 있어요."}/>
                </div>
            </div>
        </div>
        <div className={styles.container}>
            <h1 className={styles.nomg}>이런 모임들이 있어요!</h1>
            <div className={styles.cardcontainer2}>
                <Card title={"교양머리"} tags={["독서", "인문학", "고전", "문학"]} />
                <Card title={"달다구리"} tags={["디저트", "약과", "쿠키"]} />
                <Card title={"몸이 나쁘면 머리가 고생한다!"} tags={["헬스", "득근", "식단", "운동"]} />
                <Card title={"물만난 겜창들"} tags={["디코방있음", "PC게임", "롤", "LOL"]} />
            </div>
        </div>
        <div className={styles.container}>
            <h1 className={styles.mg}>찾는 모임이 없다면?</h1>
            <div className={styles.cardcontainer}>
                <div className={styles.ImgCard}>
                    <ImgCard title={"신규 모임 개설"} desc={"새로운 모임을 만들어 회원을 모아보세요!"} icon={"check_circle"}/>
                </div>
            </div>
            <div className={styles.bt}>
                <span class="material-symbols-outlined">add_circle</span>
                <span>신규 모임 만들기</span>
            </div>
        </div>
    </>
}