import React from 'react';
import ReactDOM from 'react-dom/client';

import '../src/Assets/Styles/Index.scss';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

// Languages \\
import global_en from './Translations/EN/global.json';
import global_es from './Translations/ES/global.json';
import global_ja from './Translations/JA/global.json';

import App from './App';

i18next.init({
	interpolation: {escapeValue: false},
  	lng: localStorage.getItem('language') || 'en',
  	resources: {
    	es: {
      		global: global_es
    	},
    	en: {
      		global: global_en
    	},
    	ja: {
      		global: global_ja
    	}
  }
})

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>  
    </React.StrictMode>
);