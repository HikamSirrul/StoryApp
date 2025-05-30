import IdbHelper from '../../utils/idb-helper';

const SavedPagePresenter = {
  async getSavedStories() {
    const allStories = await IdbHelper.getAllStories();
    // Filter hanya yang disimpan manual
    return allStories.filter(story => story.manualSaved === true);
  },

  async deleteSavedStory(id) {
    return await IdbHelper.deleteStory(id);
  }
};

export default SavedPagePresenter;
