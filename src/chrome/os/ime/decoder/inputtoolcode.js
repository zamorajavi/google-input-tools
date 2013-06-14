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
 * @fileoverview Defines the input tool code.
 */


goog.provide('goog.ime.offline.InputToolCode');


/**
 * The eventtype for event in offline decoder.
 *
 * @enum {string}
 */
goog.ime.offline.InputToolCode = {
  INPUTMETHOD_PINYIN_CHINESE_SIMPLIFIED: 'zh-t-i0-pinyin',
  INPUTMETHOD_ZHUYIN_CHINESE_TRADITIONAL: 'zh-hant-t-i0-und'
};
