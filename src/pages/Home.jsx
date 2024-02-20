import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ValueContext } from '../App';
import HeroSection from '../components/HeroSection';
import logo from '../images/3d.png';

const Home = () => {
  const { t } = useTranslation();
  const value = useContext(ValueContext);

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 50 }}>{value.title}</h1>
      </div>
      <HeroSection
        myData={{
          first: t('直属推广人数'),
          second: t('有效投注'),
          third: t('总充值'),
          fourth: t(
            'Coinfans为数字货币娱乐平台。进入游戏使用当前选中的币种，不同币种进入游戏时可以兑换的筹码数量不同，但都是币本位游戏结算。详细兑换比例如下表：'
          ),
        }}
        imgsrc={logo}
        top="0rem"
      />
      <HeroSection
        myData={{
          first: t('总充值'),
          second: t('玩家亏损'),
          third: t('我的排名'),
          fourth: t(
            '您当前使用的货币为{0}将会折算成等价的美元进入游戏'
          ),
        }}
        imgsrc={logo}
        top="0rem"
        left
      />

    </div>
  );
};

export default Home;
