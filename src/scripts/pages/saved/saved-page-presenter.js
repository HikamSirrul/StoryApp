import IdbHelper from '../../utils/idb-helper';

const SavedPagePresenter = {
  async getSavedStories() {
    return await IdbHelper.getAllStories();
  },
  async deleteSavedStory(id) {
    return await IdbHelper.deleteStory(id);
  }
};

export default SavedPagePresenter;

