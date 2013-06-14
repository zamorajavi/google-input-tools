// Copyright 2013 The ChromeOS VK Authors. All Rights Reserved.
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
 * @fileoverview VK layout definition for Thai pattajoti.
 */

var TH_PATTAJOTI_LAYOUT = {
  'id': 'th_pattajoti',
  'title': '\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (Pattajoti)',
  'mappings': {
    ',c,sl,scl' : {
      '': '\u005f\u003d\u0e52\u0e53\u0e54\u0e55\u0e39\u0e57\u0e58\u0e59\u0e50' +
          '\u0e51\u0e56' +
          '\u0e47\u0e15\u0e22\u0e2d\u0e23\u0e48\u0e14\u0e21\u0e27\u0e41\u0e43' +
          '\u0e0c\u0e3a' +
          '\u0e49\u0e17\u0e07\u0e01\u0e31\u0e35\u0e32\u0e19\u0e40\u0e44\u0e02' +
          '\u0e1a\u0e1b\u0e25\u0e2b\u0e34\u0e04\u0e2a\u0e30\u0e08\u0e1e'
    },
    's,l,sc,cl': {
      '': '\u0e3f\u002b\u0022\u002f\u002c\u003f\u0e38\u0e45\u002e\u0028\u0029' +
          '\u002d\u0025' +
          '\u0e4a\u0e24\u0e46\u0e0d\u0e29\u0e36\u0e1d\u0e0b\u0e16\u0e12\u0e2f' +
          '\u0e26\u0e4d' +
          '\u0e4b\u0e18\u0e33\u0e13\u0e4c\u0e37\u0e1c\u0e0a\u0e42\u0e06\u0e11' +
          '\u0e0e\u0e0f\u0e10\u0e20{{\u0e31\u0e49}}\u0e28\u0e2e\u0e1f\u0e09' +
          '\u0e2c'
    }
  }
};

// Load the layout and inform the keyboard to switch layout if necessary.
cros_vk_loadme(TH_PATTAJOTI_LAYOUT);
