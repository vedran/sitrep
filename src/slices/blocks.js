import { createSlice } from "@reduxjs/toolkit";

const blocksSlice = createSlice({
  name: "blocks",
  initialState: {
    byId: {},
    allIds: []
  },
  reducers: {
    loadBlocks(state, { payload: blocks }) {
      blocks.map(block => {
        state.byId[block.id] = block;
        state.allIds.push(block.id);
      });
    },
    addTodoToBlock(state, { payload: { blockId, todoId } }) {
      if (!state.byId[blockId].todoIds) {
        state.byId[blockId].todoIds = [];
      }

      if (state.byId[blockId].todoIds.find(id => id === todoId)) {
        // Already exists
        return;
      }

      state.byId[blockId].todoIds.push(todoId);
    }
  }
});

export const { addTodoToBlock, loadBlocks } = blocksSlice.actions;
export default blocksSlice.reducer;
