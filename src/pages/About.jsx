import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "../components/HeroSection";
import logo from '../images/3d.png';

i18n.use(initReactI18next).init({
  resources: {
    vn: {
      translation: {
        "有效投注": "Valid stake",
        "亏损": "Loss",
        "直属推广人数": "Directly",
        "Coinfans为数字货币娱乐平台。进入游戏使用当前选中的币种，不同币种进入游戏时可以兑换的筹码数量不同，但都是币本位游戏结算。详细兑换比例如下表：": "Coinfans is a digital currency entertainment platform. The currently selected currency is used to enter the game. The number of chips that can be exchanged for different currencies when entering the game is different, but they are all settled in currency-based games. The detailed conversion ratio is as follows:"
      }
    },
  },
  lng: "vn",
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

const About = () => {
  const { t } = useTranslation()
  // const value = useContext(ValueContext)
  // console.log(value)

  return (
    <div style={{ padding: "10rem" }}>
      <HeroSection imgsrc={logo} myData={{ first: t("直属推广人数"), second: t("有效投注"), third: t("亏损"), fourth: t("Coinfans为数字货币娱乐平台。进入游戏使用当前选中的币种，不同币种进入游戏时可以兑换的筹码数量不同，但都是币本位游戏结算。详细兑换比例如下表：") }} top="0rem" />
    </div>
  );
};

export default About;
