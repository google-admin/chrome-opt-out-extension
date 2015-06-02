// Copyright 2015 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * @fileoverview This file is linked to uninstall.html, a page that can be
 * pointed to from a Help Center article and will allow the user to uninstall
 * the extension.
 */


window.addEventListener("load", function() {
  var title = chrome.i18n.getMessage("extension_name");
  var button = document.getElementById('uninstall');

  document.title = title;
  button.innerText = chrome.i18n.getMessage("uninstall_button", title);
  button.addEventListener("click", function() {
    chrome.management.uninstallSelf();
  });
});

