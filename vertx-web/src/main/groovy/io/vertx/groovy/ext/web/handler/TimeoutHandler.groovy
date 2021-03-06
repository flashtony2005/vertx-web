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

package io.vertx.groovy.ext.web.handler;
import groovy.transform.CompileStatic
import io.vertx.lang.groovy.InternalHelper
import io.vertx.core.json.JsonObject
import io.vertx.groovy.ext.web.RoutingContext
import io.vertx.core.Handler
/**
 * Handler that will timeout requests if the response has not been written after a certain time.
 * Timeout requests will be ended with an HTTP status code `503`.
*/
@CompileStatic
public class TimeoutHandler implements Handler<RoutingContext> {
  private final def io.vertx.ext.web.handler.TimeoutHandler delegate;
  public TimeoutHandler(Object delegate) {
    this.delegate = (io.vertx.ext.web.handler.TimeoutHandler) delegate;
  }
  public Object getDelegate() {
    return delegate;
  }
  public void handle(RoutingContext arg0) {
    ((io.vertx.core.Handler) delegate).handle(arg0 != null ? (io.vertx.ext.web.RoutingContext)arg0.getDelegate() : null);
  }
  /**
   * Create a handler
   * @return the handler
   */
  public static TimeoutHandler create() {
    def ret = InternalHelper.safeCreate(io.vertx.ext.web.handler.TimeoutHandler.create(), io.vertx.groovy.ext.web.handler.TimeoutHandler.class);
    return ret;
  }
  /**
   * Create a handler
   * @param timeout the timeout, in ms
   * @return the handler
   */
  public static TimeoutHandler create(long timeout) {
    def ret = InternalHelper.safeCreate(io.vertx.ext.web.handler.TimeoutHandler.create(timeout), io.vertx.groovy.ext.web.handler.TimeoutHandler.class);
    return ret;
  }
  /**
   * Create a handler
   * @param timeout the timeout, in ms
   * @param errorCode 
   * @return the handler
   */
  public static TimeoutHandler create(long timeout, int errorCode) {
    def ret = InternalHelper.safeCreate(io.vertx.ext.web.handler.TimeoutHandler.create(timeout, errorCode), io.vertx.groovy.ext.web.handler.TimeoutHandler.class);
    return ret;
  }
}
