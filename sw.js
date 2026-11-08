var C="pos-v3";
self.addEventListener("install",function(e){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){if(e.request.method!="GET")return;var u=new URL(e.request.url);if(u.origin!=self.location.origin&&u.hostname!="www.gstatic.com")return;
e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(C).then(function(x){x.put(e.request,c)});return r}).catch(function(){return caches.match(e.request).then(function(r){return r||caches.match("./index.html")})}))});
