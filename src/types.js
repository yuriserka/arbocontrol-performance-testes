const {
    Next,
    EventEmitter,
    ScenarioContext,
    ResponseRequest,
    RequestResponse,
} = require('artillery');

/**
 * all functions that handles some logic before a request should be defined this way
 *
 * @param {ResponseRequest} req  is an object given to the Request library. Use this parameter to customize what is sent in the request (headers, body, cookies etc)
 * @param {ScenarioContext} context is the virtual user's context, context.vars is a dictionary containing all defined variables
 * @param {EventEmitter} ee is an event emitter that can be used to communicate with Artillery
 * @param {Next} next is the callback which must be called for the scenario to continue; it takes no arguments
 */
function IBeforeRequest(req, context, ee, next) {
    return next();
};

/**
 * all functions that handles some logic after response should be defined this way
 *
 * @param {ResponseRequest} req  is an object given to the Request library. Use this parameter to customize what is sent in the request (headers, body, cookies etc)
 * @param {RequestResponse} res is likewise the response object from the Request library. This object contains response headers, body etc.
 * @param {ScenarioContext} context is the virtual user's context, context.vars is a dictionary containing all defined variables
 * @param {EventEmitter} ee is an event emitter that can be used to communicate with Artillery
 * @param {Next} next is the callback which must be called for the scenario to continue; it takes no arguments
 */
function IAfterResponse(req, res, context, ee, next) {
    return next();
};

/**
 * @param {ScenarioContext} context is the virtual user's context, context.vars is a dictionary containing all defined variables
 * @param {EventEmitter} ee is an event emitter that can be used to communicate with Artillery
 * @param {Next} next is the callback which must be called for the scenario to continue; it takes no arguments
 */
function IScenarioHooks(context, ee, next) {
    return next();
}
