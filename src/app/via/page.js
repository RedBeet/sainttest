"use client";
import styles from "./page.module.css";
import { sedtua } from '../data'
import { GotoHome } from '../components';
import { useRouter } from "next/navigation";

export default function SedTua() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <GotoHome />
      </div>
      <div className={styles.whatIsSedtua}>
        <div className={styles.WhatIsSedtuaLat}>
            <span>Quid est </span>
            <span>
              <span className={styles.sedtua}>VIA</span>
              <span>?</span>
            </span>
        </div>
        <div className={styles.WhatIsSedtuaKr}>비아가 무엇인가요?</div>
      </div>
      <div className={styles.sedtuaDescription}>
      [가톨릭학생회 VIA란?] <br />
충남대학교 학생들로 이루어진 가톨릭 공동체로, 1964년에 시작되어 현재까지 이어져 오고 있는 유구한 역사와 전통의 ‘신앙공동체’입니다. VIA의 이름에는 ‘-을 통하여’라는 뜻이 있으며, VIA를 통하여 그리스도를 향한 믿음과 사랑의 길에 함께하는 공동체가 되고자 노력하고 있습니다. 또한, 학문의 진리 탐구가 목적인 대학생들로 이루어진 만큼, 가톨릭교회 최고의 신학자로 존경받는 성 토마스 아퀴나스 성인(St. Thomas Aquinas)을 주보 성인으로 두고 있습니다. 이를 바탕으로 대학생들이 학부 또는 대학원 과정 중 주님께서 주신 자유의지를 바탕으로 성숙하고 올바른 신앙생활을 할 수 있도록 신심을 다하여 조력하고 있습니다. 가톨릭학생회 VIA는 그리스도의 사랑을 실천하는 자세에 중점을 두고 있으며, 이는 신앙공동체 안에서 기도와 묵상을 통해 서로의 고통과 기쁨을 나누는 것으로 일상의 지친 삶을 위로받고, 함께 나누며 주님 안에서 소중한 신앙의 길을 걸어가고 있습니다.
<br /><br />
[가톨릭학생회 VIA의 활동은?] <br />
가톨릭학생회 VIA는 학기별로 나뉘어 1학기와 2학기 활동으로 진행됩니다. 매 학기 시작과 끝에는 개강미사와 종강미사가 있으며, 미사 집전은 지도신부님께서 진행해 주십니다. 이렇게 개강미사를 시작으로 대학 생활 중 신앙생활을 함께할 활동들이 시작됩니다. 대표적으로 한 학기 동안 주간 모임인 ‘명례방’ 활동을 최소 1회씩 진행하고 있습니다. 명례방은 복음을 함께 읽고, 복음 안에서 묵상한 것을 함께 나누며 서로 지난 한 주, 혹은 이제 걸어 나갈 한 주에 대해 신앙 안에서 깊게 대화하고, 경청하는 활동입니다. 또한 가톨릭교회의 교리에 대해서 더욱 알아가고자 하는 교우분들을 위해 VIA의 담당 선교사님과 함께 ‘가톨릭 교리반’ 프로그램을 운영하고 있습니다. 이 밖에도 주일 미사를 궁동성당에서 함께 드리고 있으며, 하느님 말씀에 더욱 가까이 가는 ‘청년성서모임’, 동방에서 즐기는 영화, ‘VIA 시네마’, 여름, 겨울 방학 중 가는 ‘성지순례 겸 MT’등 다양한 활동들이 있습니다.
      </div>
    </div>
  );
}