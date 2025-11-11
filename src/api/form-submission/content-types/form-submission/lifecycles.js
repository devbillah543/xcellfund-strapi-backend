const cache = require('../../../../utils/cache'); // adjust path if needed

module.exports = {
  async afterCreate(event) {
    await cache.clearAll();
  },
  async afterUpdate(event) {
    await cache.clearAll();
  },
  async afterDelete(event) {
    await cache.clearAll();
  },
};
