import { useContext } from 'react';
import { ValueContext } from '../App';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const value = useContext(ValueContext);
  const { t } = useTranslation();
  return (
    <div style={{ background: `${value.color}` }}>
      <footer style={{ padding: '0 0 0 50px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h3>{t('分红发送时间')}</h3>
            <p>{t('参与直属分红渠道配置')}</p>
          </div>
          <div className="footer-about">
            <h3>{t('分红发送时间')}</h3>
            <p>{t('参与直属分红渠道配置')}</p>
          </div>
          <div className="footer-about">
            <h3>{t('分红发送时间')}</h3>
            <p>{t('参与直属分红渠道配置')}</p>
          </div>
          <div className="footer-social">
            <h3>{t('分红发送时间')}</h3>
            <p>{t('参与直属分红渠道配置')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
