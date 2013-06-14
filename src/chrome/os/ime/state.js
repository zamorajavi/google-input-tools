// Copyright 2013 The ChromeOS IME Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Defines the model states.
 */
goog.provide('goog.ime.chrome.os.State');



/**
 * The input method config.
 *
 * @constructor
 */
goog.ime.chrome.os.State = function() {
  /**
   * The shortcut of the state.
   *
   * @type {Array.<string>}
   */
  this.shortcut = [];
};


/**
 * The description of the state.
 *
 * @type {string}
 */
goog.ime.chrome.os.State.prototype.desc = '';


/**
 * The value of the state.
 *
 * @type {boolean}
 */
goog.ime.chrome.os.State.prototype.value = false;
