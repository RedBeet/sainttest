export const caution = {
  ko: [
    "개인정보는 테스트 종료 이후 별도로 저장하지 않고 폐기합니다.",
    "본 테스트는 동아리에 대한 흥미를 돋우기 위해 제작된 척도로, 측정값이 응답자의 실제 성향과 일부 일치하지 않을 수 있습니다.",
    "본 테스트의 결과는 절대적인 것이 아니며, 테스트에 등장하는 인물들의 삶은 다양한 맥락에서 해석될 수 있습니다.",
  ],
  en: [
    "Personal information will be discarded without being saved after the test.",
    "This test is designed to spark interest in the club. The results may not entirely match your actual personality.",
    "The results of this test are not absolute, and the lives of the figures in the test can be interpreted in various contexts.",
  ],
};

export const questions = {
  ko: [
    {
      scale: "I_E",
      question: "봉사활동을 할 때에 선호하는 곳은?",
      answers: [
        {
          answer: "다른 지역이나 해외부터",
          weight: -1,
        },
        {
          answer: "내 주변에 있는 곳부터",
          weight: 1,
        },
      ],
    },
    {
      scale: "C_R",
      question: "이론은 당신에게 어떤 의미인가요?",
      answers: [
        {
          answer: "그 이론을 어떻게 실생활에 응용하는지가 중요하다",
          weight: -1,
        },
        {
          answer: "이론 그 자체로도 의미가 있다",
          weight: 1,
        },
      ],
    },
    {
      scale: "V_D",
      question: "내가 팀장이라면, 어떤 역할일까요?",
      answers: [
        {
          answer: "함께 일을 나누면서 팀원들을 격려로 이끈다",
          weight: 1,
        },
        {
          answer: "리더쉽과 카리스마로 팀원들을 이끈다",
          weight: -1,
        },
      ],
    },
    {
      scale: "C_R",
      question: "전통에 대해해 어떻게 생각하나요?",
      answers: [
        {
          answer: "우리의 정체성이며 지켜야할 사회적 약속이다",
          weight: 1,
        },
        {
          answer: "시대에 맞게 유연하게 변화할 수 있다",
          weight: -1,
        },
      ],
    },
    {
      scale: "I_E",
      question:
        "누군가에게 감사를 표하고자 합니다. 어떤 방식으로 표현하시나요?",
      answers: [
        {
          answer: "선물 등 간접적인 방법으로",
          weight: 1,
        },
        {
          answer: "밥 한 끼 사는 식으로",
          weight: -1,
        },
      ],
    },
    {
      scale: "V_D",
      question: "동아리에 새내기가 들어왔습니다. 어떻게 대할까요?",
      answers: [
        {
          answer: "동아리 활동에 대한 팁을 나눈다",
          weight: -1,
        },
        {
          answer: "필요한 것을 직접 도와준다",
          weight: 1,
        },
      ],
    },
    {
      scale: "V_D",
      question: "가난한 곳에는 어떤 봉사가 필요할까요?",
      answers: [
        {
          answer: "직접 찾아가서 물자를 지원한다",
          weight: 1,
        },
        {
          answer: "재산 자체보다 재산을 불리는 교육이 중요하다",
          weight: -1,
        },
      ],
    },
    {
      scale: "S_F",
      question: "공동체에 문제가 닥쳤을 때 나는 먼저",
      answers: [
        {
          answer: "문제에 대해 분석한다",
          weight: -1,
        },
        {
          answer: "토의와 회의 시간을 잡는다",
          weight: 1,
        },
      ],
    },
    {
      scale: "I_E",
      question: "어디서 봉사 활동을 하고 싶은가요?",
      answers: [
        {
          answer: "사회 단체나 지역 사회에서",
          weight: -1,
        },
        {
          answer: "성당 내 봉사 단체에서",
          weight: 1,
        },
      ],
    },
    {
      scale: "S_F",
      question: "생활에서 가장 중요하게 생각하는 것은 무엇인가요?",
      answers: [
        {
          answer: "다른 사람과 함께하는 것",
          weight: 1,
        },
        {
          answer: "나 혼자만의 시간",
          weight: -1,
        },
      ],
    },
    {
      scale: "S_F",
      question: "내면의 성장을 위해 어떤 활동을 선호하시나요?",
      answers: [
        {
          answer: "개인 독서를 통한 사색",
          weight: -1,
        },
        {
          answer: "독서 모임을 통한 토론",
          weight: 1,
        },
      ],
    },
    {
      scale: "C_R",
      question: "교육 방식은 어떠해야 한다고 생각하시나요?",
      answers: [
        {
          answer: "새로운 방법론을 적용한 수업",
          weight: -1,
        },
        {
          answer: "우리에게 익숙한 강의식",
          weight: 1,
        },
      ],
    },
  ],
  en: [
    {
      scale: "I_E",
      question: "Where do you prefer to volunteer?",
      answers: [
        { answer: "Other regions or overseas first", weight: -1 },
        { answer: "Places near me first", weight: 1 },
      ],
    },
    {
      scale: "C_R",
      question: "What does theory mean to you?",
      answers: [
        { answer: "How to apply it in real life is important", weight: -1 },
        { answer: "Theory itself has meaning", weight: 1 },
      ],
    },
    {
      scale: "V_D",
      question: "If I were a team leader, what role would I take?",
      answers: [
        {
          answer: "Lead by encouraging team members and sharing work",
          weight: 1,
        },
        {
          answer: "Lead team members with leadership and charisma",
          weight: -1,
        },
      ],
    },
    {
      scale: "C_R",
      question: "What do you think about tradition?",
      answers: [
        {
          answer: "It is our identity and a social promise to keep",
          weight: 1,
        },
        { answer: "It can flexibly change according to the times", weight: -1 },
      ],
    },
    {
      scale: "I_E",
      question: "You want to express gratitude to someone. How do you show it?",
      answers: [
        { answer: "In an indirect way, such as a gift", weight: 1 },
        { answer: "By buying them a meal", weight: -1 },
      ],
    },
    {
      scale: "V_D",
      question: "A freshman joined the club. How do you treat them?",
      answers: [
        { answer: "Share tips about club activities", weight: -1 },
        { answer: "Directly help with what they need", weight: 1 },
      ],
    },
    {
      scale: "V_D",
      question: "What kind of volunteering is needed in poor areas?",
      answers: [
        { answer: "Visit directly and provide supplies", weight: 1 },
        {
          answer:
            "Education on how to grow wealth is more important than wealth itself",
          weight: -1,
        },
      ],
    },
    {
      scale: "S_F",
      question: "When a problem occurs in the community, I first",
      answers: [
        { answer: "Analyze the problem", weight: -1 },
        { answer: "Schedule time for discussion and meeting", weight: 1 },
      ],
    },
    {
      scale: "I_E",
      question: "Where do you want to volunteer?",
      answers: [
        { answer: "In social organizations or local communities", weight: -1 },
        {
          answer: "In a volunteer group within the Catholic church",
          weight: 1,
        },
      ],
    },
    {
      scale: "S_F",
      question: "What do you consider most important in life?",
      answers: [
        { answer: "Being with others", weight: 1 },
        { answer: "Time for myself", weight: -1 },
      ],
    },
    {
      scale: "S_F",
      question: "What activities do you prefer for inner growth?",
      answers: [
        { answer: "Contemplation through individual reading", weight: -1 },
        { answer: "Discussion through reading groups", weight: 1 },
      ],
    },
    {
      scale: "C_R",
      question: "How do you think education should be?",
      answers: [
        { answer: "Classes applying new methodologies", weight: -1 },
        { answer: "Familiar lecture style", weight: 1 },
      ],
    },
  ],
};

export const saints = {
  ko: {
    C: {
      S: {
        V: {
          I: {
            name: "성 김대건 안드레아",
            summary: "조선 최초의 사제",
            description:
              "성 김대건 안드레아(1821-1846)는 조선 최초의 가톨릭 사제로서 신앙을 지키고 전파하는 데 온 삶을 바친 성인입니다. 조선 시대의 박해 속에서도 교회의 전통과 가르침을 지키며 신앙 공동체를 보호하는 데 헌신했습니다. 또한, 사제가 부족했던 조선에서 적극적으로 복음을 설파하며, 신자들에게 성사를 집전하고 교리를 가르치는 일을 중요하게 여겼습니다. 그는 단순한 설교에 그치지 않고 신자들의 필요를 직접 채우며 봉사했습니다. 성사를 통해 신앙 공동체를 돌보고, 조선 교회의 기반을 마련하기 위해 노력했습니다. 교회 공동체 내에서 신앙을 지키는 것을 무엇보다 중요하게 여기며, 박해 속에서도 신자들이 흔들리지 않도록 도왔습니다. 그분의 희생과 신앙은 한국 교회의 뿌리가 되었으며, 오늘날까지 많은 이들에게 깊은 영감을 주고 있습니다.",
            imageSrc: "/img/StKimAndr.png",
          },
          E: {
            name: "그레고어 멘델",
            summary: "유전학의 아버지",
            description:
              "그레고어 멘델(1822-1884)은 신앙을 지키며 학문을 통해 진리를 탐구하고, 가르침과 봉사를 통해 교회와 과학 발전에 기여한 성직자이자 유전학의 선구자입니다. 그는 수도자로서 교회의 전통과 가치를 소중히 여기며, 하느님의 창조 질서를 연구하는 것이 신앙을 더욱 깊이 이해하는 길이라고 믿었습니다. 또한, 적극적으로 지식을 전파하며 과학과 신앙이 조화를 이룰 수 있음을 강조했습니다. 수도원에서 학생들을 가르치고 연구를 수행하며, 교육과 학문의 중요성을 설파했습니다. 그는 실험과 연구뿐만 아니라 공동체를 위해 봉사하는 삶을 실천하며, 수도원 내부에서 형제들과 지식을 공유하고 신앙 공동체의 발전을 위해 헌신했습니다. 그의 연구는 오늘날 유전학의 기초가 되었으며, 신앙과 학문의 조화를 이루는 모범이 되어 후대에도 큰 영향을 미치고 있습니다.",
            imageSrc: "/img/GregMendel.png",
          },
        },
        D: {
          I: {
            name: "가경자 최양업 토마스",
            summary: "조선 교회의 기둥",
            description:
              "가경자 최양업 토마스(1821-1861)는 박해 속에서도 신앙을 지키며, 복음을 전하고 교회를 이끄는 데 헌신한 사제입니다. 조선의 혹독한 박해 시대에 교회의 전통과 가르침을 굳게 수호하며, 신앙 공동체를 보호하는 데 평생을 바쳤습니다. 또한, 사제가 부족한 조선에서 신자들에게 성사를 집전하고 교리를 가르치며, 적극적으로 복음을 설파했습니다. 그는 조선 곳곳을 숨어 다니며 신자들을 만나고 격려하며, 신앙 공동체를 지키는 데 힘썼습니다. 지도자로서 신자들을 이끌며, 성사를 통해 신앙을 지키고 공동체를 강화하는 역할을 했습니다. 그의 사목은 교회 내부에 깊이 뿌리를 내렸으며, 신자들이 신앙을 포기하지 않도록 끝까지 헌신했습니다. 그의 희생과 신앙은 조선 교회의 든든한 기초가 되었으며, 오늘날에도 신앙을 위한 헌신의 모범이 되고 있습니다.",
            imageSrc: "/img/VenChoiTh.png",
          },
          E: {
            name: "성녀 카타리나",
            summary: "신앙의 수호자",
            description:
              "알렉산드리아의 성녀 카타리나(287-305)는 신앙을 굳게 지키며, 학문과 지혜로 복음을 설파하고 지도자로서 교회를 수호한 성인입니다. 박해 속에서도 교회의 가르침을 변함없이 지키며, 그리스도교 신앙을 옹호하는 데 헌신했습니다. 또한, 뛰어난 학식을 바탕으로 이교 철학자들과 토론하며 신앙의 진리를 증명하고, 적극적으로 복음을 설파했습니다. 그녀의 강한 신념과 설득력은 많은 사람을 개종시키는 계기가 되었으며, 지도자로서 교회를 수호하는 데 중요한 역할을 했습니다. 그녀는 신앙을 위해 박해자들 앞에서도 당당히 맞섰고, 결국 순교의 길을 걸었습니다. 그분의 신앙과 지혜는 오늘날까지도 많은 이들에게 영감을 주며, 학문과 신앙이 조화를 이루는 모범이 되고 있습니다.",
            imageSrc: "/img/StCatharina.png",
          },
        },
      },
      F: {
        V: {
          I: {
            name: "이태석 요한",
            summary: "수단의 슈바이처",
            description:
              "이태석 요한 신부(1962-2010)는 신앙의 가르침을 굳게 지키며, 깊은 성찰과 봉사를 통해 하느님의 사랑을 실천한 성직자입니다. 그는 사제이자 의사로서, 자신의 재능을 오직 하느님과 이웃을 위해 사용하며 헌신적인 삶을 살았습니다. 깊은 기도와 묵상을 통해 신앙을 성찰하며, 이를 바탕으로 어려운 이들을 돌보는 봉사에 헌신했습니다. 그는 가난하고 의료 환경이 열악한 수단에서 환자들을 치료하고 교육하며, 신앙과 사랑을 실천하는 삶을 살았습니다. 특히, 교회 공동체 안에서 신앙을 전하며, 성사를 집전하고 신자들을 돌보는 데 힘썼습니다. 그가 남긴 사랑과 희생의 삶은 오늘날에도 많은 이들에게 영감을 주며, 신앙과 봉사의 모범이 되고 있습니다.",
            imageSrc: "/img/LeeIo.png",
          },
          E: {
            name: "복자 황일광 시몬",
            summary: "박해 속의 증거자",
            description:
              "복자 황일광 시몬(1757-1802)은 조선 후기의 한국의 복자입니다. 어린 시절부터 천주교 신앙을 배웠으며, 신해박해 때 체포되었다가 풀려난 뒤에도 신앙을 굳건히 지켰습니다. 그는 충청도 지역에서 교리를 전파하는 회장직을 맡아 열심히 활동했습니다. 천한 신분이였지만, 천주교 공동체는 따뜻한 마음으로 그를 받아들였고, 그 역시 봉사 정신으로 교회의 일에 임했습니다. 1801년 신유박해가 일어나자 체포되어 포도청과 형조에서 문초와 형벌을 받았습니다. 그러나 신앙을 버리라는 강요에도 굴하지 않고 신앙을 증언했습니다. 결국 그는 1802년 서울 광희문 밖 새남터에서 27세의 나이로 순교했습니다. 그분의 희생과 신앙은 조선 교회의 귀중한 유산이 되었으며, 오늘날까지 신앙과 나눔의 삶을 살아가는 모든 이들에게 깊은 영감을 주고 있습니다.",
            imageSrc: "/img/BtHwangSim.png",
          },
        },
        D: {
          I: {
            name: "성 니콜라오",
            summary: "산타클로스의 기원",
            description:
              "성 니콜라오(270-343)는 4세기 초 소아시아의 파타라에서 부유한 그리스도교 집안에서 태어났습니다. 어린 나이에 부모를 여의고 받은 유산을 가난한 이들을 위해 사용했습니다. 젊은 나이에 미라(현재 터키 데믈레)의 주교가 된 그는 디오클레티아누스 황제의 박해 때 투옥되었다가 콘스탄티누스 대제 때 풀려났습니다. 니케아 공의회에 참석하여 아리우스 이단 교설에 맞서 정통 신앙을 수호했습니다. 특히 가난한 이들을 위한 그의 사랑은 유명한데, 결혼 지참금이 없어 어려움을 겪던 세 자매에게 밤중에 몰래 금화를 던져주어 구해준 일화가 전해집니다. 이는 후에 산타클로스 전설의 기원이 되었습니다. 그는 현재까지도 선원, 상인, 어린이, 가난한 이들의 수호성인으로 공경받고 있습니다.",
            imageSrc: "/img/StNicolaus.png",
          },
          E: {
            name: "성녀 헤드비지스",
            summary: "가난한 이들의 어머니",
            description:
              "실레시아의 성녀 헤드비지스(1174?-1243)는 독일 바이에른의 안덱스 성에서 베르톨트 공작의 여덟 자녀 중 하나로 태어났습니다. 12세에 폴란드의 하인리히 1세와 결혼하여 슐레지엔의 공작 부인이 되었으며, 남편의 지원 아래 브로츠와프에 성 아우구스티노 참사 수도회를 설립하고, 트레브니츠에 시토회 수녀원을 세우는 등 교회와 사회를 위한 다양한 활동을 펼쳤습니다. 남편과 사별한 후에는 트레브니츠 수녀원에서 수도 생활에 전념하며 가난한 이들을 돕고, 척박한 땅을 개간하여 독일 이주민들을 위한 새로운 도시와 촌락을 조성하였습니다. 그녀는 극도의 가난과 고행을 실천하며 하느님께 헌신하였습니다.",
            imageSrc: "/img/StHedvigesSil.png",
          },
        },
      },
    },
    R: {
      S: {
        V: {
          I: {
            name: "성 요한 보스코",
            summary: "청소년의 아버지",
            description:
              "성 요한 보스코(1815-1888)는 가난한 청소년들의 교육과 신앙을 위해 헌신하신 성인입니다. 당시 사회의 변화 속에서 그는 엄격한 훈육 대신 사랑과 신뢰를 바탕으로 한 예방 교육 시스템을 도입하여 청소년들이 올바른 길을 갈 수 있도록 돕는 개혁적인 교육을 실천했습니다. 또한, 복음을 적극적으로 전파하며 신앙을 쉽게 받아들일 수 있도록 연극, 음악, 글 등을 활용했습니다. 단순한 가르침을 넘어 직접 청소년들과 함께 생활하며 봉사하며, 그들의 필요를 채워주었습니다. 이를 위해 성당과 학교, 직업 훈련소를 설립하며 교회 공동체 안에서의 활동을 중시했고, 신앙 교육과 성사를 통해 청소년들이 하느님과 깊이 연결될 수 있도록 도왔습니다. 그분의 사명은 살레시오 수도회를 통해 오늘날까지 이어지며, 신앙과 교육이 결합된 혁신적인 사목의 모범이 되고 있습니다.",
            imageSrc: "/img/StIoBosco.png",
          },
          E: {
            name: "성 이냐시오",
            summary: "예수회의 창립자",
            description:
              "성 이냐시오(1491-1556)는 스페인 바스크 지방에서 태어났습니다. 젊은 시절 군인으로 활동하던 중, 팜플로나 전투에서 부상을 당해 회복 기간 동안 신앙 서적을 읽으며 회심하게 되었습니다. 이후 몬세라트와 만레사에서 영적 수련을 하며 깊은 신앙 생활을 이어갔습니다. 파리에서 여섯 명의 동료와 함께 예수회를 창설하였고, 1540년 교황 바오로 3세로부터 공식 인가를 받았습니다. 그는 《영신 수련》이라는 영적 지침서를 저술하여 많은 이들에게 영적 지도를 제공하였습니다. 예수회는 교육, 선교, 자선 활동을 통해 가톨릭 교회의 쇄신에 크게 기여하였습니다.",
            imageSrc: "/img/StIgnatius.png",
          },
        },
        D: {
          I: {
            name: "성 요한 크리소스토모",
            summary: "황금의 입을 가진 설교자",
            description:
              "성 요한 크리소스토모(347-407)는 시리아 안티오키아에서 태어나, 법철학과 설교학을 공부한 후 369년에 세례를 받았습니다. 이후 은수자들과 함께 금욕생활을 하며 신앙을 깊게 다졌습니다. 386년 사제로 서품된 그는 탁월한 설교로 명성을 얻어 '황금의 입'이라는 별칭을 얻었습니다.이후 콘스탄티노플의 주교로 임명되어 가난한 이들을 위한 구호소와 병자들을 위한 호스피스를 설립하고, 이방인 지역에 선교사를 파견하는 등 활발한 사목 활동을 펼쳤습니다. 그러나 고위 성직자와 관료들의 사치와 부패를 비판하여 황후의 반감을 사게 되었고, 결국 두 차례 추방되어 두 번째 유배 중에 세상을 떠났습니다. 그의 저서와 설교, 성서 주석은 오늘날까지도 큰 영향을 미치고 있습니다. 특히 동방정교회에서 이 성인의 위상은 절대적이며, 이 성인이 다듬은 예배를 주로 행하고 있습니다.",
            imageSrc: "/img/StIoChrysostomus.png",
          },
          E: {
            name: "성 요한 바오로 2세",
            summary: "현대 가톨릭의 아버지",
            description:
              "성 요한 바오로 2세(1920-2005)는 현대 가톨릭 교회의 개혁을 이끈 교황으로, 신앙의 본질을 지키면서도 시대에 맞게 교회를 변화시키는 데 앞장섰습니다. 그는 세계 곳곳을 방문하며 신앙을 설파하고 대중과 소통하는 개혁적인 교황이었습니다.   또한, 강력한 지도력으로 복음을 전파하며, 대중 연설과 미디어를 적극 활용했습니다. 특히 세계 청년 대회(WYD)를 창설하여 젊은이들을 신앙으로 이끌었습니다. 그는 교회 밖에서도 인권과 자유를 위해 싸우며, 공산주의와 독재에 맞서 신앙을 실천했습니다. 그분의 업적은 오늘날까지도 신앙과 사회의 조화를 이루는 모범이 되고 있습니다.",
            imageSrc: "/img/StIoPaII.png",
          },
        },
      },
      F: {
        V: {
          I: {
            name: "성녀 소화 데레사",
            summary: "사랑의 사도",
            description:
              "성녀 소화 데레사(1873-1897)는 깊은 성찰과 봉사를 통해 신앙을 실천하며, 단순하고도 깊은 사랑의 길을 걸어간 성인입니다. 그녀는 가톨릭 신앙의 본질을 더욱 깊이 이해하고, 교회가 나아가야 할 방향을 새롭게 바라보며, 사랑을 통한 영적 개혁을 강조했습니다. 그녀는 끊임없는 기도와 묵상을 통해 신앙을 성찰하며, 일상의 작은 일들을 사랑으로 채우는 **‘작은 길’**의 영성을 실천했습니다. 봉사의 삶을 선택하여 가르멜 수도원 안에서 형제자매들을 위해 헌신하며, 단순한 행위 속에서도 깊은 사랑을 실천했습니다. 그녀의 사명은 외부에서 활동하는 것이 아니라, 교회 공동체 내부에서 기도와 희생을 통해 세상을 위한 사랑을 전하는 것이었습니다. 그녀의 가르침과 모범은 오늘날에도 많은 이들에게 영감을 주며, 신앙을 실천하는 데 있어 겸손과 사랑이 가장 큰 힘이 됨을 깨닫게 해줍니다.",
            imageSrc: "/img/StTheresiaLex.png",
          },
          E: {
            name: "아시시의 성 프란치스코",
            summary: "가난과 겸손의 성인",
            description:
              "아시시의 성 프란치스코(1181-1226)는 교회의 개혁과 복음적 삶을 실천하며, 가난과 겸손을 통해 하느님의 사랑을 전한 성인입니다. 당시 부유한 가정에서 태어났지만, 세상의 명예와 부를 버리고 철저한 복음적 삶을 선택하며 교회가 본래의 모습을 되찾아야 한다고 강조했습니다. 그는 깊은 성찰을 통해 하느님과의 일치를 추구하며, 기도와 묵상을 통해 신앙을 더욱 깊이 깨달았습니다. 또한, 신앙을 말로만이 아니라 직접 실천하며, 가난한 이들과 함께하며 그들의 필요를 채우는 봉사에 헌신했습니다. 그는 단순한 도움을 넘어, 세상 속에서 복음을 실천하며 창조 세계와의 조화를 이루는 삶을 살았습니다. 그분의 삶은 오늘날까지도 많은 이들에게 영감을 주며, 가난과 겸손, 사랑의 실천이 무엇인지를 보여주는 신앙의 모범이 되고 있습니다.",
            imageSrc: "/img/StFranciscusAs.png",
          },
        },
        D: {
          I: {
            name: "성 정하상 바오로",
            summary: "조선 교회의 개척자",
            description:
              "성 정하상 바오로(1795-1839)는 조선 가톨릭 교회의 발전을 위해 헌신한 지도자로, 신앙 공동체의 기틀을 마련하고 교회의 체계를 정비하는 데 앞장섰습니다. 그는 박해 속에서도 조선 교회가 자립해야 한다고 믿었으며, 기존의 방식에 얽매이지 않고 교황청에 직접 서한을 보내 조선에 성직자를 파견해 줄 것을 요청하는 등 개혁적인 신앙 활동을 펼쳤습니다. 또한, 깊은 신앙적 성찰을 바탕으로 교회의 가르침을 연구하며, 신자들이 올바른 신앙을 지킬 수 있도록 교리 교육에 힘썼습니다. 그는 지도자로서 신앙 공동체를 이끌며 성직자가 부족한 상황에서도 교회를 유지하는 데 중요한 역할을 했습니다. 특히 내부에서 신자들을 가르치고 조직을 강화하는 데 집중하며, 교회의 기반을 다지는 데 헌신했습니다. 그분의 신앙과 희생은 조선 교회의 든든한 기초가 되었으며, 오늘날까지도 신앙 공동체를 위한 모범이 되고 있습니다.",
            imageSrc: "/img/StChongPa.png",
          },
          E: {
            name: "성 토마스 아퀴나스",
            summary: "가톨릭 신학의 거장",
            description:
              "성 토마스 아퀴나스(1225-1274)는 가톨릭 신학과 철학의 새로운 지평을 연 사상가로, 교회의 가르침을 시대에 맞게 정리하고 체계화하는 개혁적인 신학자로 활동했습니다. 그는 아리스토텔레스 철학을 신학과 접목하여, 신앙과 이성이 조화를 이룰 수 있음을 논증하며 교회의 사상을 더욱 발전시켰습니다. 또한, 깊은 성찰을 바탕으로 신학적 연구에 몰두하며 《신학대전》을 비롯한 수많은 저서를 남겼습니다. 그는 단순한 학자가 아니라 신학적 지도자로서 많은 제자들을 양성하며, 교회를 이끌어갈 신학적 토대를 구축했습니다. 그의 가르침은 교회 안에만 머무르지 않고, 외부 세계에도 큰 영향을 미치며 철학과 신학의 발전에 기여했습니다. 그분의 사상은 오늘날까지도 신학과 철학의 기초가 되며, 신앙과 이성이 조화를 이루는 길을 제시하는 중요한 모범이 되고 있습니다.",
            imageSrc: "/img/StThAquinas.png",
          },
        },
      },
    },
  },
  en: {
    C: {
      S: {
        V: {
          I: {
            name: "St. Andrew Kim Tae-gon",
            summary: "The first priest of Joseon",
            description:
              "St. Andrew Kim Tae-gon (1821-1846) is the first Catholic priest of Joseon who dedicated his entire life to protecting and propagating the faith. Amidst the persecution of the Joseon era, he devoted himself to defending the traditions and teachings of the Church and protecting the faith community. Moreover, in Joseon where priests were scarce, he actively preached the gospel and highly valued administering sacraments and teaching doctrine to believers. He did not stop at simple preaching but directly served the needs of the faithful. Through the sacraments, he cared for the community and strove to lay the foundation for the Joseon Church. He prioritized defending the faith within the community above all else, helping believers remain steadfast despite persecution. His sacrifice and faith became the roots of the Korean Church, continuing to deeply inspire many today.",
            imageSrc: "/img/StKimAndr.png",
          },
          E: {
            name: "Gregor Mendel",
            summary: "The father of genetics",
            description:
              "Gregor Mendel (1822-1884) was a priest and pioneer of genetics who pursued truth through scholarship while preserving his faith, contributing to the Church and the development of science through teaching and service. As a religious, he cherished the traditions and values of the Church, believing that studying God's order of creation was a way to a deeper understanding of faith. Furthermore, he actively disseminated knowledge and emphasized that science and faith could be harmonized. He taught students and conducted research at the monastery, preaching the importance of education and scholarship. He practiced a life of service for the community not just through experiments and research, but also by sharing knowledge with his brothers and dedicating himself to the growth of the faith community. His research became the foundation of modern genetics, serving as an enduring model of harmony between faith and academia.",
            imageSrc: "/img/GregMendel.png",
          },
        },
        D: {
          I: {
            name: "Ven. Thomas Choe Yang-eop",
            summary: "Pillar of the Joseon Church",
            description:
              "Ven. Thomas Choe Yang-eop (1821-1861) was a priest who dedicated his life to protecting the faith, preaching the gospel, and leading the Church through persecution. He spent his life firmly defending the traditions and teachings of the Church and protecting the faith community during the severe persecutions of the Joseon era. Furthermore, as priests were lacking in Joseon, he actively preached the gospel by administering sacraments and teaching doctrine. He traveled secretly throughout Joseon to meet and encourage believers, dedicating his energy to safeguarding the community. As a leader, he guided the faithful and played a pivotal role in strengthening the community through the sacraments. His pastoral work laid deep roots within the Church, as he devoted himself until the end to ensure believers would not abandon their faith. His sacrifice serves as the firm foundation of the Joseon Church and remains a model of devotion.",
            imageSrc: "/img/VenChoiTh.png",
          },
          E: {
            name: "St. Catherine of Alexandria",
            summary: "Defender of the Faith",
            description:
              "St. Catherine of Alexandria (287-305) was a saint who firmly defended her faith, preached the gospel with scholarship and wisdom, and protected the Church as a leader. Amidst persecution, she unfailingly defended the Church's teachings and devoted herself to championing the Christian faith. With her exceptional erudition, she debated pagan philosophers, proving the truth of the faith and actively preaching the gospel. Her strong conviction and persuasiveness led many to convert, and she played a crucial role in defending the Church. She bravely stood before her persecutors for her faith and ultimately walked the path of martyrdom. Her faith and wisdom continue to inspire many today, serving as a shining model of harmony between scholarship and faith.",
            imageSrc: "/img/StCatharina.png",
          },
        },
      },
      F: {
        V: {
          I: {
            name: "Fr. John Lee Tae-seok",
            summary: "Schweitzer of Sudan",
            description:
              "Fr. John Lee Tae-seok (1962-2010) was a clergyman who firmly upheld the teachings of the faith and practiced God's love through deep reflection and service. As both a priest and a medical doctor, he lived a dedicated life using his talents solely for God and his neighbors. He reflected on his faith through deep prayer and meditation, and based on this, committed himself to serving and caring for those in need. He lived out his faith and love by treating and educating patients in Sudan, a place of extreme poverty and poor medical conditions. In particular, he focused on spreading the faith within the church community, administering sacraments, and looking after the faithful. The life of love and sacrifice he left behind continues to inspire many today, standing as a true model of faith and service.",
            imageSrc: "/img/LeeIo.png",
          },
          E: {
            name: "Bl. Simon Hwang Il-gwang",
            summary: "Martyr of the Joseon Church",
            description:
              "Bl. Simon Hwang Il-gwang (1757-1802) is a Korean beatified martyr from the late Joseon period. Having learned the Catholic faith from a young age, he was arrested during the Sinhae Persecution but remained steadfast in his faith even after being released. He worked diligently as a catechist (Hoejang), spreading the doctrine in the Chungcheong region. Although he was of lowly birth, the Catholic community warmly embraced him, and he equally devoted himself to the Church's work with a spirit of service. When the Sinyu Persecution broke out in 1801, he was arrested and subjected to interrogation and torture at the Podocheong and Hyeongjo. However, he refused to yield to the pressure to abandon his faith and boldly testified to it. Ultimately, he was martyred at Saenamteo outside Gwanghuimun in Seoul in 1802 at the age of 27. His sacrifice and faith have become a precious legacy of the Joseon Church, continuing to deeply inspire all who live a life of faith and sharing today.",
            imageSrc: "/img/BtHwangSim.png",
          },
        },
        D: {
          I: {
            name: "St. Nicholas",
            summary: "Origin of Santa Claus",
            description:
              "St. Nicholas (270-343) was born into a wealthy Christian family in Patara, Asia Minor in the early 4th century. Orphaned at a young age, he used his inheritance to help the poor. Becoming the bishop of Myra (present-day Demre, Turkey) at a young age, he was imprisoned during the persecution of Emperor Diocletian and released under Emperor Constantine the Great. He attended the Council of Nicaea to defend the orthodox faith against the Arian heresy. His love for the poor is especially famous; an anecdote tells of him secretly throwing gold coins at night to rescue three sisters who were struggling due to a lack of dowries. This later became the origin of the Santa Claus legend. He is venerated to this day as the patron saint of sailors, merchants, children, and the poor.",
            imageSrc: "/img/StNicolaus.png",
          },
          E: {
            name: "St. Hedwig of Silesia",
            summary: "Mother of the Poor",
            description:
              "St. Hedwig of Silesia (1174?-1243) was born at Andechs Castle in Bavaria, Germany, as one of eight children of Duke Berthold. Married to Henry I of Poland at the age of 12, she became the Duchess of Silesia. With her husband's support, she carried out various activities for the Church and society, including establishing the Augustinian Canons in Wrocław and a Cistercian convent in Trzebnica. After being widowed, she devoted herself entirely to monastic life at the Trzebnica convent, helping the poor and cultivating barren land to establish new towns and villages for German immigrants. She dedicated herself to God by practicing extreme poverty and asceticism.",
            imageSrc: "/img/StHedvigesSil.png",
          },
        },
      },
    },
    R: {
      S: {
        V: {
          I: {
            name: "St. John Bosco",
            summary: "Father and Teacher of Youth",
            description:
              "St. John Bosco (1815-1888) is a saint who dedicated himself to the education and faith of poor youth. Amidst the social changes of his time, he broke away from strict discipline and introduced the 'Preventive System' based on love and trust, practicing reformative education to help young people find the right path. Additionally, he actively propagated the gospel and used theater, music, and writing to make the faith easier to accept. Going beyond simple teaching, he lived and served directly with the youth, fulfilling their needs. To this end, he established churches, schools, and vocational training centers, emphasizing activities within the church community, and helped the youth deeply connect with God through faith education and the sacraments. His mission continues today through the Salesian Society, standing as a model of innovative pastoral work combining faith and education.",
            imageSrc: "/img/StIoBosco.png",
          },
          E: {
            name: "St. Ignatius of Loyola",
            summary: "Founder of the Society of Jesus",
            description:
              "St. Ignatius (1491-1556) was born in the Basque region of Spain. While serving as a soldier in his youth, he was injured in the Battle of Pamplona and experienced a conversion while reading religious books during his recovery. Afterward, he continued a deep life of faith, engaging in spiritual exercises in Montserrat and Manresa. Together with six companions in Paris, he founded the Society of Jesus, which received official approval from Pope Paul III in 1540. He authored a spiritual guidebook titled the 'Spiritual Exercises', providing spiritual direction to many. The Society of Jesus contributed significantly to the renewal of the Catholic Church through education, missionary work, and charitable activities.",
            imageSrc: "/img/StIgnatius.png",
          },
        },
        D: {
          I: {
            name: "St. John Chrysostom",
            summary: "The Golden-Mouthed Preacher",
            description:
              "St. John Chrysostom (347-407) was born in Antioch, Syria. After studying legal philosophy and homiletics, he was baptized in 369. He subsequently deepened his faith by living an ascetic life with hermits. Ordained as a priest in 386, he gained renown for his exceptional preaching, earning the epithet 'Golden-Mouthed'. Later appointed as the Bishop of Constantinople, he engaged in active pastoral work, such as establishing shelters for the poor and hospices for the sick, and dispatching missionaries to foreign regions. However, by criticizing the luxury and corruption of high-ranking clergy and officials, he incurred the Empress's enmity, ultimately being exiled twice and passing away during his second exile. His writings, sermons, and biblical commentaries continue to have a profound impact today. His status is especially absolute in the Eastern Orthodox Church, which primarily uses the liturgy he refined.",
            imageSrc: "/img/StIoChrysostomus.png",
          },
          E: {
            name: "St. Pope John Paul II",
            summary: "Father of Modern Catholicism",
            description:
              "St. Pope John Paul II (1920-2005) was a reformative pope who led the modernization of the Catholic Church, championing the transformation of the Church to fit the times while preserving the essence of the faith. He was a pope who traveled the world, preaching the faith and communicating with the masses. Furthermore, he propagated the gospel with strong leadership, actively utilizing public speeches and mass media. Notably, he established World Youth Day (WYD) to draw young people to the faith. He also fought for human rights and freedom outside the Church, practicing his faith against communism and dictatorship. His achievements remain a model of harmonizing faith and society to this day.",
            imageSrc: "/img/StIoPaII.png",
          },
        },
      },
      F: {
        V: {
          I: {
            name: "St. Thérèse of Lisieux",
            summary: "Apostle of Love",
            description:
              "St. Thérèse of Lisieux (1873-1897) is a saint who practiced her faith through deep reflection and service, walking a path of simple yet profound love. She more deeply understood the essence of the Catholic faith, newly envisioned the direction the Church should take, and emphasized spiritual reform through love. Reflecting on her faith through constant prayer and meditation, she practiced the spirituality of the 'Little Way', filling small everyday acts with love. Choosing a life of service, she dedicated herself to her brothers and sisters within the Carmel monastery, practicing deep love even in simple deeds. Her mission was not to be active externally, but to spread love for the world through prayer and sacrifice inside the church community. Her teachings and example continue to inspire many today, helping us realize that humility and love are the greatest strengths in practicing faith.",
            imageSrc: "/img/StTheresiaLex.png",
          },
          E: {
            name: "St. Francis of Assisi",
            summary: "Saint of Poverty and Humility",
            description:
              "St. Francis of Assisi (1181-1226) is a saint who practiced Church reform and an evangelical life, conveying God's love through poverty and humility. Although born into a wealthy family at the time, he emphasized that the Church must regain its original form, abandoning worldly honor and wealth to choose a life of strict evangelical poverty. He sought unity with God through deep reflection, realizing his faith more profoundly through prayer and meditation. Moreover, he did not just speak of faith but practiced it directly, dedicating himself to serving by living alongside the poor and fulfilling their needs. Beyond simple assistance, he lived a life of practicing the gospel in the world and achieving harmony with the created world. His life continues to inspire many to this day, standing as a model of faith that demonstrates what the practice of poverty, humility, and love truly means.",
            imageSrc: "/img/StFranciscusAs.png",
          },
        },
        D: {
          I: {
            name: "St. Paul Chong Ha-sang",
            summary: "Pioneer of the Joseon Church",
            description:
              "St. Paul Chong Ha-sang (1795-1839) was a leader who dedicated himself to the development of the Joseon Catholic Church, taking the lead in laying the foundation of the faith community and reforming the Church's system. He believed that the Joseon Church had to be self-reliant even amidst persecution, and he engaged in reformative faith activities, unconstrained by existing methods, such as directly sending letters to the Vatican to request the dispatch of priests to Joseon. Furthermore, based on deep religious reflection, he studied the Church's teachings and devoted himself to doctrinal education so that believers could keep their faith correctly. As a leader guiding the faith community, he played a crucial role in maintaining the Church even in situations where priests were scarce. He particularly focused on teaching believers and strengthening the organization internally, dedicating himself to solidifying the Church's foundation. His faith and sacrifice became the sturdy bedrock of the Joseon Church and remain a model for the faith community today.",
            imageSrc: "/img/StChongPa.png",
          },
          E: {
            name: "St. Thomas Aquinas",
            summary: "Master of Catholic Theology",
            description:
              "St. Thomas Aquinas (1225-1274) was a thinker who opened a new horizon in Catholic theology and philosophy, working as a reformative theologian who organized and systematized the Church's teachings to fit the times. Integrating Aristotelian philosophy with theology, he further developed the Church's thought by demonstrating that faith and reason can be harmonized. Furthermore, based on deep reflection, he immersed himself in theological research, leaving behind numerous writings including the 'Summa Theologica'. As a theological leader rather than just a simple scholar, he trained many disciples and established the theological foundation to guide the Church. His teachings did not remain confined within the Church but had a profound impact on the external world, contributing to the development of philosophy and theology. His thought remains the foundation of theology and philosophy today, standing as a crucial model that presents a path where faith and reason achieve harmony.",
            imageSrc: "/img/StThAquinas.png",
          },
        },
      },
    },
  },
};
