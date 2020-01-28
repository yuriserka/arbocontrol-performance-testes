import groovy.json.JsonSlurper 
def JSON = new JsonSlurper()

def res = JSON.parseText(prev.getResponseDataAsString())

vars.put('id_unidade', "${res[args[0] as int].id}")

// res.each {
//   obj -> log.info("id = ${obj.id}\n")
// }