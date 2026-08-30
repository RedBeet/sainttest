const fs = require('fs');
const dataJsPath = 'C:\\Users\\jason\\Desktop\\sainttest\\src\\app\\data.js';
let originalCode = fs.readFileSync(dataJsPath, 'utf8');

const enSaintsStr = `{
  C: {
    S: {
      V: { I: { name: 'St. Andrew Kim Tae-gon', summary: 'The first priest of Joseon', description: 'St. Andrew Kim Tae-gon (1821-1846) is the first Catholic priest of Joseon who dedicated his life to protecting and propagating the faith amidst persecution. He valued administering sacraments and teaching doctrines to believers.', imageSrc: '/img/StKimAndr.png' },
           E: { name: 'Gregor Mendel', summary: 'The father of genetics', description: 'Gregor Mendel (1822-1884) was a priest and pioneer of genetics who pursued truth through scholarship while keeping his faith. He emphasized the harmony of science and faith.', imageSrc: '/img/GregMendel.png' } },
      D: { I: { name: 'Ven. Thomas Choe Yang-eop', summary: 'Pillar of the Joseon Church', description: 'Ven. Thomas Choe Yang-eop (1821-1861) was a priest who dedicated his life to protecting the faith and preaching the gospel amidst the severe persecution of Joseon.', imageSrc: '/img/VenChoiTh.png' },
           E: { name: 'St. Catherine of Alexandria', summary: 'Defender of the Faith', description: 'St. Catherine of Alexandria (287-305) firmly defended the faith and preached the gospel with her scholarship and wisdom despite persecution.', imageSrc: '/img/StCatharina.png' } }
    },
    F: {
      V: { I: { name: 'Fr. John Lee Tae-seok', summary: 'Schweitzer of Sudan', description: 'Fr. John Lee Tae-seok (1962-2010) was a medical doctor and priest who spread the love of God through sharing and volunteering. He established a hospital and school in Tonj, Sudan.', imageSrc: '/img/LeeIo.png' },
           E: { name: 'St. Nicholas', summary: 'Saint of Love and Sharing', description: 'St. Nicholas (270-343) is the real-life model of Santa Claus who secretly helped those in need with a warm heart and charity.', imageSrc: '/img/StNicolaus.png' } },
      D: { I: { name: 'Bl. Alexius Hwang Sa-yeong', summary: 'Martyr for Faith and Justice', description: 'Bl. Alexius Hwang Sa-yeong (1775-1801) was a scholar and martyr who devoted himself to establishing the foundation of the Joseon Church and requested pastoral support from the Pope.', imageSrc: '/img/BtHwangSim.png' },
           E: { name: 'St. Hedwig of Silesia', summary: 'Mother of the Poor', description: 'St. Hedwig of Silesia (1174-1243) dedicated her life to helping the poor and sick, actively engaging in charity works as a noblewoman.', imageSrc: '/img/StHedvigesSil.png' } }
    }
  },
  R: {
    S: {
      V: { I: { name: 'St. John Bosco', summary: 'Father and Teacher of Youth', description: 'St. John Bosco (1815-1888) devoted his life to educating and guiding youth, demonstrating God\\'s love through preventive education.', imageSrc: '/img/StIoBosco.png' },
           E: { name: 'St. Ignatius of Loyola', summary: 'Founder of the Society of Jesus', description: 'St. Ignatius of Loyola (1491-1556) founded the Society of Jesus and reformed the Church with strict spiritual training and obedience.', imageSrc: '/img/StIgnatius.png' } },
      D: { I: { name: 'St. John Chrysostom', summary: 'The Golden-Mouthed Preacher', description: 'St. John Chrysostom (347-407) was a renowned preacher known for his eloquent sermons. He boldly criticized the corruption of high-ranking officials.', imageSrc: '/img/StIoChrysostomus.png' },
           E: { name: 'St. Pope John Paul II', summary: 'Father of Modern Catholicism', description: 'St. Pope John Paul II (1920-2005) led the reform of the modern Catholic Church, actively using media and public speeches to propagate the faith worldwide.', imageSrc: '/img/StIoPaII.png' } }
    },
    F: {
      V: { I: { name: 'St. Thérèse of Lisieux', summary: 'Apostle of Love', description: 'St. Thérèse of Lisieux (1873-1897) practiced her faith through deep reflection and small daily acts of love, known as the \\'Little Way\\'.', imageSrc: '/img/StTheresiaLex.png' },
           E: { name: 'St. Francis of Assisi', summary: 'Saint of Poverty and Humility', description: 'St. Francis of Assisi (1181-1226) emphasized evangelical life and reform, finding God\\'s love through poverty and humility.', imageSrc: '/img/StFranciscusAs.png' } },
      D: { I: { name: 'St. Paul Chong Ha-sang', summary: 'Pioneer of the Joseon Church', description: 'St. Paul Chong Ha-sang (1795-1839) was a lay leader who dedicated himself to laying the foundation of the Joseon Catholic Church and requested priests from the Pope.', imageSrc: '/img/StChongPa.png' },
           E: { name: 'St. Thomas Aquinas', summary: 'Master of Catholic Theology', description: 'St. Thomas Aquinas (1225-1274) opened new horizons in Catholic theology by harmonizing faith and reason through his profound scholarship.', imageSrc: '/img/StThAquinas.png' } }
    }
  }
}`;

let saintsMatch = originalCode.match(/export const saints = (\{[\s\S]*?\});?\s*$/);
let koSaints = saintsMatch[1];
const newSaints = 'export const saints = {\n  ko: ' + koSaints + ',\n  en: ' + enSaintsStr + '\n};';
fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\s.js', newSaints, 'utf8');
