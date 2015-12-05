( function (root) {

// the store is taking in message from the dispatcher
//and using switch clause to see if it cares
// (via messages type). If it cares, it makes
// the relevant change to data and then
//notifies the view (through event listeners
// installed on its data)

// so each store

//consider making _keys an object instead of array
  var _keys = [];
  var CHANGE_EVENT = "change";

  var KeyStore = root.KeyStore = $.extend(
    {},
    EventEmitter.prototype,
    {
// register a callback with the AppDispatcher
// register method will return a dispatcherToken
// this is meant to be used with waitFor(), in case
// stores need to update in certain order
// so were setting dispatcherId to that token
// were also registering all of our stores responses
// here. response depends on the message type.

      dispatcherId: KeyDispatcher.register(function (payLoad) {
        //payload has a actionType and noteName
        switch (payLoad.actionType) {
// chage cases based on payLoad actionTypes
          case "key_pressed":
            KeyStore.addKey(payLoad.noteName);
            break;
          case "key_released":
            KeyStore.removeKey(payLoad.noteName);
            break;
          case "key_group_update":
            KeyStore.replaceKeys(payLoad.keyGroup);
            break;
        }
      }),

      all: function () {
        return _keys.slice();
      },

      addKey: function (noteName) {
        if ($.inArray(noteName, _keys) === -1) {
          _keys.push(noteName);
          this.emit(CHANGE_EVENT);
        }
      },

      removeKey: function (noteName) {
        for (var i = 0; i < _keys.length; i++) {
          if (_keys[i] === noteName) {
            _keys.splice(i, 1);
          }
        }
        this.emit(CHANGE_EVENT);
      },

      replaceKeys: function (keys) {
        _keys = keys;
        this.emit(CHANGE_EVENT)
      },

// install  emitters and listeners
// so, we use jquery's .emit to emit an event
// to all listeners. in this case, its CHANGE_EVENT
// then we have an addChangeListener method
// this is used by views to install they're listeners
// onto KeyStore. So now they're callbacks
//get fired whenever theyre change_event gets emitted

      addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
      },

      removeChangeListener: function (callback) {
        this.off(CHANGE_EVENT, callback);
      }
    });
})(this);
