import groovy.json.JsonBuilder

// log.info("""unidade extraida com o JSON Extractor = 
//               ${vars.get('unidade_rel')}""")

def builder = new JsonBuilder()

builder {
  nome args[0]
  unidade vars.get('unidade_rel')
  equipesVinculos null
}

def body = builder.toString().replace('\\"', '"').replace('"{', '{').replace('}"', '}')
body = body.substring(1, body.size() - 1)

log.info("request.body = ${body}")
vars.put('equipe_body', body)