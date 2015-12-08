( function (root) {

  var _keys = [],
      CHANGE_EVENT = "change";

  var KeyStore = root.KeyStore = $.extend(
    {},
    EventEmitter.prototype,
    {

      dispatcherId: Dispatcher.register(function (payLoad) {
        switch (payLoad.actionType) {
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

      addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
      },

      removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
      }
    });
})(this);
