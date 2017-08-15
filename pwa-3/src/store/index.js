/**
 * @file store index
 * @author stephen(935867520@qq.com)
 */

import Vue from 'vue';
import Vuex from 'vuex';
import {createAppShellState} from './modules/app-shell';

Vue.use(Vuex);


export function createStore() {
    return new Vuex.Store({
        modules: {
            appShell: createAppShellState()
        }
    });
}
