function getMessages(messages) {
  return messages.filter(function(key){
    return key.message.length < 50
  }).map(function(index){
    return index.message;
  })
}
