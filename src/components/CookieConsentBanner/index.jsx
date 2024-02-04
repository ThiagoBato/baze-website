import { useState } from 'react';
import CookieConsent from 'react-cookie-consent';

export const CookieConsentBanner = () => {
  const [hasConsentValue, setHasConsentValue] = useState('');

  return (
    !hasConsentValue && (
      <CookieConsent
        location="bottom"
        cookieName="cookieConsent"
        expires={30}
        enableDeclineButton
        onAccept={() => {
          setHasConsentValue(true);
        }}
        onDecline={() => {
          setHasConsentValue(false);
        }}
        declineButtonText="Negar"
        buttonText="Aceitar"
        style={{
          background: '#2B373B',
          color: '#FFFFFF',
        }}
        buttonStyle={{
          color: '#000',
          backgroundColor: '#3abff8',
          fontSize: '14px',
          borderRadius: '5px',
        }}
        declineButtonStyle={{
          color: '#000',
          backgroundColor: '#3abff8',
          fontSize: '14px',
          borderRadius: '5px',
        }}
      >
        Este site usa cookies para aumentar a experiência
      </CookieConsent>
    )
  );
};
