const fs = require('fs');
const R2 = {
  F: {
    V: {
      I: {
        name: "St. Thérèse of Lisieux",
        summary: "Apostle of Love",
        description: "St. Thérèse of Lisieux (1873-1897) practiced her faith through profound inner reflection and small acts of love, known as the 'Little Way'. She sought spiritual reform by emphasizing that holiness could be achieved through humble, everyday actions rather than grand deeds. Within the Carmel monastery, she devoted herself to serving her sisters through continuous prayer and sacrifice, dedicating her life to love. Her mission was realized not through external activities, but through a deep, internal commitment to praying for the world and the Church. Her modest yet profound path of love remains one of the most inspiring models of modern spirituality.",
        imageSrc: "/img/StTheresiaLex.png"
      },
      E: {
        name: "St. Francis of Assisi",
        summary: "Saint of Poverty and Humility",
        description: "St. Francis of Assisi (1181-1226) drove Church reform by choosing a life of radical poverty and humility, bringing the gospel directly to the marginalized. Forsaking his wealth, he sought unity with God through deep prayer and living closely with the poor and outcast. He led by example, actively working to restore the Church to its true evangelical roots. His deep love extended to all of creation, promoting harmony between humanity and nature. His life of simplicity and active compassion continues to profoundly influence those seeking the true meaning of the gospel.",
        imageSrc: "/img/StFranciscusAs.png"
      }
    },
    D: {
      I: {
        name: "St. Paul Chong Ha-sang",
        summary: "Pioneer of the Joseon Church",
        description: "St. Paul Chong Ha-sang (1795-1839) was a pioneer of the Joseon Catholic Church who dedicated himself to building the community's foundation and reforming its structure. Amidst severe persecution, he believed the Church needed a strong, self-reliant basis. He took the innovative step of writing directly to the Pope to request the dispatch of priests, showing remarkable leadership. He focused on strengthening the internal organization of the faithful and providing vital religious education. His unwavering devotion and ultimate martyrdom fortified the roots of the Korean Church, standing as a monumental example of lay leadership.",
        imageSrc: "/img/StChongPa.png"
      },
      E: {
        name: "St. Thomas Aquinas",
        summary: "Master of Catholic Theology",
        description: "St. Thomas Aquinas (1225-1274) was a master of Catholic theology who opened new horizons by harmonizing faith and reason. As a reformative thinker, he integrated Aristotelian philosophy with Christian doctrine, successfully systematizing the Church's teachings for a new era. Through deep contemplation and rigorous study, he authored monumental works like the 'Summa Theologica'. As a theological leader, he nurtured countless students and established an intellectual foundation that reached far beyond the Church into the broader world. His profound insights continue to be the bedrock of Catholic philosophy and theology today.",
        imageSrc: "/img/StThAquinas.png"
      }
    }
  }
};
fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\enR2.json', JSON.stringify(R2), 'utf8');
