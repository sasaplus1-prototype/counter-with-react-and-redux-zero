(function(){

  'use strict';

  //----------------------------------------------------------------------------

  const ReduxZero = {
    createStore: window['redux-zero'],
  };

  //----------------------------------------------------------------------------

  const store = ReduxZero.createStore({
    count: 0,
  });

  function decrement() {
    store.setState({
      count: store.getState().count - 1,
    });
  }

  function increment() {
    store.setState({
      count: store.getState().count + 1,
    });
  }

  //----------------------------------------------------------------------------

  function mapStateToProps(state) {
    return Object.assign({}, state);
  }

  function mapDispatchToProps(dispatch) {
    return {
      decrement,
      increment,
    };
  }

  const Counter = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(
    class extends React.Component {
      render() {
        const {
          count,
          decrement,
          increment,
        } = this.props;

        return (
          <div>
            <span>{count}</span>
            <br />
            <input type="button" value="inc" onClick={increment} />
            <input type="button" value="dec" onClick={decrement} />
          </div>
        );
      }
    }
  );

  //----------------------------------------------------------------------------

  const Provider = ReactRedux.Provider;

  class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Counter />
        </Provider>
      );
    }
  }

  //----------------------------------------------------------------------------

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

}());
