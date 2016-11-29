// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function addCurrent() {
  try {
    chrome.tabs.getSelected(null, ({
      url
    }) => {
      chrome.storage.local.set({
        'url': url
      })
    })
  } catch ({
    message
  }) {
    alert(message)
  }
}

function hideHandler() {
  chrome.storage.local.remove('url')
}


// Create a parent item and two children.
var child1 = chrome.contextMenus.create({
  "title": "add current website to block list",
  "onclick": addCurrent
});
var child2 = chrome.contextMenus.create({
  "title": "add website to block list",
  "onclick": hideHandler
});

chrome.contextMenus.create({
  "title": "Oops",
  "parentId": 999
}, function () {
  if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
  }
});
