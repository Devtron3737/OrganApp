var ConvertUtil = {
  toObj: function(arr){
    var obj = {};
    if (typeof arr == "object") {
        for (var i in arr) {
            var objDup = ConvertUtil.toObj(arr[i]);
            obj[i] = objDup;
        }
    } else {
        obj = arr;
    }
    return obj;
  }
}
