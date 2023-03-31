import React from 'react';
import ReactDOM from 'react-dom/client';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

import App from './App';
import './index.css';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','uk'],
    fallbackLng: "en",
    detection:{
      order: ['localStorage','cookie','htmlTag', 'querystring',  'path', 'subdomain'],
      cashe:['cookie'],
    },
    backend:{
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react:{useSuspense:false}
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
