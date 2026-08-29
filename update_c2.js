const fs = require('fs');
let c2 = JSON.parse(fs.readFileSync('C:\\Users\\jason\\Desktop\\sainttest\\enC2.json', 'utf8'));

c2.F.V.E.name = 'Bl. Simon Hwang Il-gwang';
c2.F.V.E.summary = 'Martyr of the Joseon Church';
c2.F.V.E.description = "Bl. Simon Hwang Il-gwang (1757-1802) is a Korean beatified martyr from the late Joseon period. Having learned the Catholic faith from a young age, he was arrested during the Sinhae Persecution but remained steadfast in his faith even after being released. He worked diligently as a catechist (Hoejang), spreading the doctrine in the Chungcheong region. Although he was of lowly birth, the Catholic community warmly embraced him, and he equally devoted himself to the Church's work with a spirit of service. When the Sinyu Persecution broke out in 1801, he was arrested and subjected to interrogation and torture at the Podocheong and Hyeongjo. However, he refused to yield to the pressure to abandon his faith and boldly testified to it. Ultimately, he was martyred at Saenamteo outside Gwanghuimun in Seoul in 1802 at the age of 27. His sacrifice and faith have become a precious legacy of the Joseon Church, continuing to deeply inspire all who live a life of faith and sharing today.";
c2.F.V.E.imageSrc = '/img/BtHwangSim.png';

c2.F.D.I.name = 'St. Nicholas';
c2.F.D.I.summary = 'Saint of Love and Sharing';
c2.F.D.I.description = "St. Nicholas (270-343) was born into a wealthy Christian family in Patara, Asia Minor in the early 4th century. Orphaned at a young age, he used his inheritance to help the poor. Becoming the bishop of Myra (present-day Demre, Turkey) at a young age, he was imprisoned during the persecution of Emperor Diocletian and released under Emperor Constantine the Great. He attended the Council of Nicaea to defend the orthodox faith against the Arian heresy. His love for the poor is especially famous; an anecdote tells of him secretly throwing gold coins at night to rescue three sisters who were struggling due to a lack of dowries. This later became the origin of the Santa Claus legend. He is venerated to this day as the patron saint of sailors, merchants, children, and the poor.";
c2.F.D.I.imageSrc = '/img/StNicolaus.png';

c2.F.D.E.name = 'St. Hedwig of Silesia';
c2.F.D.E.summary = 'Mother of the Poor';
c2.F.D.E.description = "St. Hedwig of Silesia (1174?-1243) was born at Andechs Castle in Bavaria, Germany, as one of eight children of Duke Berthold. Married to Henry I of Poland at the age of 12, she became the Duchess of Silesia. With her husband's support, she carried out various activities for the Church and society, including establishing the Augustinian Canons in Wrocław and a Cistercian convent in Trzebnica. After being widowed, she devoted herself entirely to monastic life at the Trzebnica convent, helping the poor and cultivating barren land to establish new towns and villages for German immigrants. She dedicated herself to God by practicing extreme poverty and asceticism.";
c2.F.D.E.imageSrc = '/img/StHedvigesSil.png';

fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\enC2.json', JSON.stringify(c2, null, 2), 'utf8');
