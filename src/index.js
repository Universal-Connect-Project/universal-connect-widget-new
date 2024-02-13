// LOAD FIRST!
// import './config/init'
//
// import React from 'react'
// import _get from 'lodash/get'
// // import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import theme from './constants/Style'
// import AppWrapper from './components/app/AppWrapper'
// import { TokenProvider } from '@kyper/tokenprovider'
//
// import { GlobalErrorBoundary } from './components/app/GlobalErrorBoundary'
//
// import WidgetDimensionObserver from './components/app/WidgetDimensionObserver'
// import localizationDispatcher, { LocaleSources } from './redux/actions/Localization'
// import { ActionTypes as ClientActionTypes } from './redux/actions/Client'
// import { ActionTypes as WidgetProfileActionTypes } from './redux/actions/WidgetProfile'
// import { ActionTypes as ThemeActionTypes } from './redux/actions/Theme'
// import PostMessage, { sendPostMessage } from './utils/PostMessage'
// import Store from './redux/Store'
// import { registerAxiosInterceptors } from './config/axios'
// import { updateTitleWithWidget } from './utils/Widget'
// import {ConnectWidget as Connect} from './widgets/desktop/Connect.js'
//
// registerAxiosInterceptors(Store.dispatch)
//
// window.logger = {
//   warn(msg){
//     console.log(msg)
//   },
//   error(msg){
//     console.log(msg)
//   },
//   log(msg){
//     console.log(msg)
//   }
// }
//
// Store.dispatch({
//   type: WidgetProfileActionTypes.WIDGET_PROFILE_LOADED,
//   payload: window.app.config
// })
//
// function oneTimeCallback(e) {
//   // Allow clients to send in a configuration hash before the specific
//   // widget has started loading.
//   const { type, data } = PostMessage.parse(e.data)
//
//   if (type === 'clientConfig') {
//     const ui_message_version =
//       _get(data, 'ui_message_version') ||
//       _get(data, 'connect.ui_message_version') ||
//       _get(data, 'master.ui_message_version', 1)
//
//     const language = _get(data, 'language') || _get(data, 'connect.language')
//
//     if (ui_message_version === 4) {
//       // new version 4 of post messages
//       sendPostMessage('config/initialized')
//     } else {
//       // old version of post messages
//       PostMessage.send('config:initialized')
//     }
//
//     Store.dispatch({ type: ClientActionTypes.INITIALIZED_CLIENT_CONFIG, payload: data })
//
//     if (data.theme) {
//       Store.dispatch({ type: ThemeActionTypes.CONFIG_THEME_LOADED, payload: data.theme })
//     }
//
//     if (language) {
//       localizationDispatcher(Store.dispatch).loadLocaleData(LocaleSources.WIDGET_LOADER, language)
//     }
//
//     window.removeEventListener('message', oneTimeCallback)
//   }
// }
//
// const languageFromFirefly = document.querySelector('html').getAttribute('lang')
//
// localizationDispatcher(Store.dispatch).loadLocaleData(LocaleSources.FIREFLY, languageFromFirefly)
//
// // Check the window for configuration from SAML
// // Atrium always sets this by default
// if (window.app.clientConfig) {
//   Store.dispatch({
//     type: ClientActionTypes.INITIALIZED_CLIENT_CONFIG,
//     payload: window.app.clientConfig,
//   })
//
//   if (window.app.clientConfig.theme) {
//     Store.dispatch({
//       type: ThemeActionTypes.CONFIG_THEME_LOADED,
//       payload: window.app.clientConfig.theme,
//     })
//   }
// }
//
// //Set up event listener for every client until we can figure out who is using the js loader and who isn't
// window.addEventListener('message', oneTimeCallback)
// // The parent only tries sending this message down for the first 5 seconds.
// // Remove itself if we never receive it.
// setTimeout(() => {
//   window.removeEventListener('message', oneTimeCallback)
// }, 5000)
//
// const widgetConfig = window.app.options || {}
//
// /**
//  * Accessibility Fix
//  *
//  * Update the title element generated by Firefly to match
//  * the name of the widget loaded but only if this is not
//  * the master widget.
//  *
//  * If this is the master widget, then
//  * let the master widget update the title based upon the
//  * current widget being shown in the master widget.
//  */
// if (widgetConfig.type !== 'master') {
//   updateTitleWithWidget(widgetConfig.type)
// }
//
// const ConnectWidget = () => {
//  return (
//    <Provider store={Store}>
//       <TokenProvider tokenOverrides={{}}>
//         <GlobalErrorBoundary>
//           <WidgetDimensionObserver
//             heightOffset={widgetConfig.type === 'master' ? theme.MasterTopBarHeight : 0}
//           >
//             <AppWrapper>
//               <Connect />
//             </AppWrapper>
//           </WidgetDimensionObserver>
//         </GlobalErrorBoundary>
//       </TokenProvider>
//     </Provider>);
// }

// export { ConnectWidget, HelloWorld };
import { HelloWorld } from "./widgets/HelloWorld.js";

export { HelloWorld };
