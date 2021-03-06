/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-web-js/csrf_handler */
var utils = require('vertx-js/util/utils');
var RoutingContext = require('vertx-web-js/routing_context');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCSRFHandler = io.vertx.ext.web.handler.CSRFHandler;

/**
 This handler adds a CSRF token to requests which mutate state. In order change the state a (XSRF-TOKEN) cookie is set
 with a unique token, that is expected to be sent back in a (X-XSRF-TOKEN) header.

 The behavior is to check the request body header and cookie for validity.

 This Handler requires session support, thus should be added somewhere below Session and Body handlers.

 @class
*/
var CSRFHandler = function(j_val) {

  var j_cSRFHandler = j_val;
  var that = this;

  /**

   @public
   @param arg0 {RoutingContext} 
   */
  this.handle = function(arg0) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_cSRFHandler["handle(io.vertx.ext.web.RoutingContext)"](arg0._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the cookie name. By default XSRF-TOKEN is used as it is the expected name by AngularJS however other frameworks
   might use other names.

   @public
   @param name {string} a new name for the cookie. 
   @return {CSRFHandler} fluent
   */
  this.setCookieName = function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_cSRFHandler["setCookieName(java.lang.String)"](name);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the header name. By default X-XSRF-TOKEN is used as it is the expected name by AngularJS however other
   frameworks might use other names.

   @public
   @param name {string} a new name for the header. 
   @return {CSRFHandler} fluent
   */
  this.setHeaderName = function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_cSRFHandler["setHeaderName(java.lang.String)"](name);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Should the handler give warning messages if this handler is used in other than https protocols?

   @public
   @param nag {boolean} true to nag 
   @return {CSRFHandler} fluent
   */
  this.setNagHttps = function(nag) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_cSRFHandler["setNagHttps(boolean)"](nag);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the timeout for tokens generated by the handler, by default it uses the default from the session handler.

   @public
   @param timeout {number} token timeout 
   @return {CSRFHandler} fluent
   */
  this.setTimeout = function(timeout) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_cSRFHandler["setTimeout(long)"](timeout);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_cSRFHandler;
};

/**
 Instantiate a new CSRFHandlerImpl with a secret
 <p>
 <pre>
 CSRFHandler.create("s3cr37")
 </pre>

 @memberof module:vertx-web-js/csrf_handler
 @param secret {string} server secret to sign the token. 
 @return {CSRFHandler}
 */
CSRFHandler.create = function(secret) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'string') {
    return utils.convReturnVertxGen(JCSRFHandler["create(java.lang.String)"](secret), CSRFHandler);
  } else throw new TypeError('function invoked with invalid arguments');
};

// We export the Constructor function
module.exports = CSRFHandler;