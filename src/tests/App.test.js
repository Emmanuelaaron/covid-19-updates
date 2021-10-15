import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import App from '../App';

describe('App component', () => {
  describe('Use Jest snapshots to test the entire App component', () => {
    it('renders countries as expected', async () => {
      const CountriessComponent = render(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>,
      );

      expect(CountriessComponent.asFragment()).toMatchSnapshot();
    });
  });
});