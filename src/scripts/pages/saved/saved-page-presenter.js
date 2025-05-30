import IdbHelper from '../../utils/idb-helper';

const SavedPagePresenter = {
  async getSavedStories() {
    try {
      const allStories = await IdbHelper.getAllStories();
      return (allStories || []).filter(story => story.manualSaved === true);
    } catch (error) {
      console.error('[SavedPagePresenter] Gagal mengambil cerita:', error);
      return [];
    }
  },

  async deleteSavedStory(id) {
    try {
      await IdbHelper.deleteStory(id);
    } catch (error) {
      console.error(`[SavedPagePresenter] Gagal menghapus cerita dengan id ${id}:`, error);
    }
  }
};

export default SavedPagePresenter;
