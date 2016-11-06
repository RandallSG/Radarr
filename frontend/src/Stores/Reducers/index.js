import { combineReducers } from 'redux';
import settings from './settingsReducers';
import system from './systemReducers';
import commands from './commandReducers';
import paths from './pathReducers';
import languages from './languageReducers';
import tags from './tagReducers';
import captcha from './captchaReducers';

export default combineReducers({
  settings,
  system,
  commands,
  paths,
  languages,
  tags,
  captcha
});