import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "../components/HeroSection";
import logo from '../images/3d.png';

const About = () => {
  const { t } = useTranslation()

  return (
    <div style={{ padding: "10rem" }}>
      <HeroSection imgsrc={logo} myData={{ first: t("玩家盈利"), second: t("我的盈利"), third: t("下一步"), fourth: t("密钥用于手机更换或遗失时找回谷歌验证器, 绑定请务必将下列密钥备份保存") }} top="0rem" />
    </div>
  );
};

export default About;
