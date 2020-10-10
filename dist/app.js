import {Application} from 'stimulus';
import {definitionsFromContext} from 'stimulus/webpack-helpers';
import './scripts/navigation.js';
import './scripts/table.js';
import './scripts/timeago.js';

const application = Application.start();
const context = require.context('./scripts/controllers', true, /\.js$/);
application.load(definitionsFromContext(context));
