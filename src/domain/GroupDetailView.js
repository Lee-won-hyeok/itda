import React, { useMemo } from "react";
// import { useParams } from "react-router-dom";
import Toggles from "../component/Toggles";
import styles from "./GroupDetailView.module.scss";

export default function GroupDetailView() {
  const data = useMemo(
    () => ({
      title: "화나면 걷는 모임",
      tags: ["색즉시공", "공즉시색", "공수래", "공수거"],
      dist: 3,
      minage: 25,
      maxage: 30,
      hobby: ["운동", "산책", "요가"],
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu hendrerit ante. Maecenas sit amet nibh accumsan, rhoncus erat et, placerat dolor. Nullam suscipit dapibus ante sit amet molestie. Curabitur fermentum, mauris quis pretium ornare, nisl justo rhoncus ex, in varius diam risus mattis magna. Cras ac vestibulum nibh. Proin consequat risus at lectus lacinia iaculis. Integer facilisis consectetur tellus non ornare. Morbi volutpat tempus enim, a sodales magna porttitor vel. Aenean eleifend malesuada orci a suscipit. Integer vehicula, augue ac fringilla semper, est magna posuere mi, quis blandit urna nisl vel tortor. Aenean quis felis vel leo tincidunt accumsan.

        Nunc dignissim tincidunt turpis, id placerat justo imperdiet ac. Etiam pulvinar felis a nisi pretium, vel dapibus diam accumsan. Curabitur at fringilla sapien. Nulla elementum dapibus orci vitae placerat. Nam ex ex, dignissim eu lectus sed, rutrum feugiat elit. Nulla at ipsum vel urna lobortis varius. Aliquam erat volutpat. Maecenas ornare leo a neque pretium porttitor. Etiam massa lectus, sollicitudin ut elit ac, egestas pretium massa. Aliquam erat volutpat. Nunc sollicitudin odio id ex pharetra interdum. Nulla suscipit justo nisi, in facilisis nisl aliquam tempus. Phasellus sit amet nisl cursus, faucibus lorem vitae, pellentesque lacus. Quisque erat mi, aliquam quis lorem sit amet, lacinia sagittis sapien. Maecenas finibus sapien sit amet lacus bibendum, molestie pellentesque leo malesuada.`,
    }),
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <img src="" alt="img" />
          <div className={styles.r}>
            <div className={styles.col}>
              <h1 className={`${styles.inline} ${styles.mr}`}>{data.title}</h1>
              {data.tags.map((i, idx) => (
                <span className={styles.tag} key={idx}>
                  <b>#{i}</b>
                </span>
              ))}
              <p className={styles.desc}>
                이 모임은 회원님과 {data.dist}Km 떨어져 있어요!/{data.minage}~
                {data.maxage}세까지 가일할 수 있어요.
              </p>
            </div>
            <div className={styles.toggles}>
              <Toggles attrs={["용돈", "산책", "요가"]} state={111}/>
            </div>
          </div>
        </div>
        <p className={styles.desc}>{data.desc}</p>
        <button type="button">모임 가입하기</button>
      </div>
    </div>
  );
}
