const fs = require('fs');
const newCaution = `export const caution = {
  ko: [
    "개인정보는 테스트 종료 이후 별도로 저장하지 않고 폐기합니다.",
    "본 테스트는 동아리에 대한 흥미를 돋우기 위해 제작된 척도로, 측정값이 응답자의 실제 성향과 일부 일치하지 않을 수 있습니다.",
    "본 테스트의 결과는 절대적인 것이 아니며, 테스트에 등장하는 인물들의 삶은 다양한 맥락에서 해석될 수 있습니다."
  ],
  en: [
    "Personal information will be discarded without being saved after the test.",
    "This test is designed to spark interest in the club. The results may not entirely match your actual personality.",
    "The results of this test are not absolute, and the lives of the figures in the test can be interpreted in various contexts."
  ]
};`;
fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\caution.js', newCaution, 'utf8');
