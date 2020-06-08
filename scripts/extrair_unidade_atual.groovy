// import groovy.json.JsonSlurper
// import groovy.json.JsonBuilder

// def slurper = new JsonSlurper()

// def res = slurper.parseText(prev.getResponseDataAsString())

// log.info("${res}")

// def unidade_str = res.content.find {
//   it.id == args[0] as int 
// }.sort()

// vars.put('unidade', "${unidade_str}")

log.info("unidade extraida com o JSON Extractor = ${vars.get('unidade_rel')}")
