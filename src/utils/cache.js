// ./src/services/cache.js
const NodeCache = require("node-cache");

// TTL = 30 days by default
const cache = new NodeCache({ stdTTL: 30 * 24 * 60 * 60, checkperiod: 600 });

function get(key) {
  return cache.get(key);
}

function set(key, value, ttlSeconds) {
  if (ttlSeconds) {
    cache.set(key, value, ttlSeconds);
  } else {
    cache.set(key, value);
  }
}

function del(key) {
  cache.del(key);
}

// Clear all cache
function clearAll() {
  cache.flushAll();
}

module.exports = { get, set, del, clearAll };
