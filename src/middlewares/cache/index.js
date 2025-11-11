const cache = require('../../utils/cache');

module.exports = (config, { strapi }) => {
  const ttl = (config && config.ttlSeconds) || 30 * 24 * 60 * 60; // 30 days

  return async (ctx, next) => {
    // only cache GET requests
    if (ctx.method !== 'GET') {
      return await next();
    }

    const key = `cache:${ctx.request.url}`;

    try {
      const cached = await cache.get(key);
      if (cached) {
        const parsed = JSON.parse(cached);
        // restore headers/status/body
        if (parsed.headers) {
          Object.keys(parsed.headers).forEach((h) => ctx.set(h, parsed.headers[h]));
        }
        ctx.status = parsed.status || 200;
        ctx.body = parsed.body;
        ctx.set('X-Cache', 'HIT');
        return;
      }
    } catch (e) {
      strapi.log.error('Cache read error:', e);
      // fallthrough to generate fresh response
    }

    await next();

    // store successful responses (adjust status check as needed)
    if (ctx.status >= 200 && ctx.status < 300) {
      const toCache = {
        status: ctx.status,
        headers: { 'content-type': ctx.response.type },
        body: ctx.body,
      };
      try {
        await cache.set(key, JSON.stringify(toCache), ttl);
        ctx.set('X-Cache', 'MISS');
      } catch (e) {
        strapi.log.error('Cache write error:', e);
      }
    }
  };
};
