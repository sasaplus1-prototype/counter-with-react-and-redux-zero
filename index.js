(function () {

  'use strict';

  //----------------------------------------------------------------------------

  const ReduxZero = {
    createStore: window['redux-zero']
  };

  //----------------------------------------------------------------------------

  const store = ReduxZero.createStore({
    count: 0
  });

  function decrement() {
    store.setState({
      count: store.getState().count - 1
    });
  }

  function increment() {
    store.setState({
      count: store.getState().count + 1
    });
  }

  //----------------------------------------------------------------------------

  function mapStateToProps(state) {
    return Object.assign({}, state);
  }

  function mapDispatchToProps(dispatch) {
    return {
      decrement,
      increment
    };
  }

  const Counter = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(class extends React.Component {
    render() {
      const {
        count,
        decrement,
        increment
      } = this.props;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          null,
          count
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'button', value: 'inc', onClick: increment }),
        React.createElement('input', { type: 'button', value: 'dec', onClick: decrement })
      );
    }
  });

  //----------------------------------------------------------------------------

  const Provider = ReactRedux.Provider;

  class App extends React.Component {
    render() {
      return React.createElement(
        Provider,
        { store: store },
        React.createElement(Counter, null)
      );
    }
  }

  //----------------------------------------------------------------------------

  ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
})();
