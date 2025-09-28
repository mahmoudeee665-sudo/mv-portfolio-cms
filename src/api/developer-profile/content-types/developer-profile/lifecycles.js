module.exports = {
  async beforeCreate(event) {
    const userId =
      event?.params?.data?.owner?.connect ||
      event?.state?.user?.id ||
      event?.params?.data?.owner;

    if (!userId) return;

    const existing = await strapi.entityService.findMany(
      'api::developer-profile.developer-profile',
      { filters: { owner: { id: userId } }, limit: 1 }
    );
    if (existing && existing.length > 0) {
      throw new Error('You already have a profile.');
    }
    // force owner
    if (!event.params.data.owner) {
      event.params.data.owner = userId;
    }
  },

  async beforeUpdate(event) {
    if (event.params.data && event.params.data.owner) {
      delete event.params.data.owner; // prevent owner changes
    }
  },
};
