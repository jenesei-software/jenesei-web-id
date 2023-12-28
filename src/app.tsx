import { AppRoutes } from '@core/router';
import { BrowserRouter } from 'react-router-dom';
import { i18n } from '@assets/i18n';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from '@core/store';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
