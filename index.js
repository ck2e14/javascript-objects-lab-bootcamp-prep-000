var recipes = {prop: '1'}


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, value)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
  
}

function deleteObjectFromKey(object, key) {
  var newObj = Object.assign({})
}


