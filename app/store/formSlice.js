import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Untitled form',
  description: '',
  questions: [], // Array of question objects
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInitialForm: (state, action) => {
      // When loading an existing form, ensure all fields have 'name' and default validation properties
      state.title = action.payload.title || 'Untitled form';
      state.description = action.payload.description || '';
      state.questions = action.payload.fields ? action.payload.fields.map(q => ({
        ...q,
        name: q.id, // Ensure 'name' is set from 'id' when loading
        minLength: q.minLength !== undefined ? q.minLength : undefined,
        maxLength: q.maxLength !== undefined ? q.maxLength : undefined,
        pattern: q.pattern !== undefined ? q.pattern : undefined,
        options: q.options || [], // Ensure options array exists
      })) : [];
    },
    updateFormDetails: (state, action) => {
      const { title, description } = action.payload;
      if (title !== undefined) {
        state.title = title;
      }
      if (description !== undefined) {
        state.description = description;
      }
    },
    addQuestion: (state, action) => {
      // When adding a new question, ensure 'name' is initialized from 'id'
      // and default validation properties are present
      state.questions.push({
        ...action.payload,
        name: action.payload.id, // Ensure 'name' is set from 'id' when adding
        minLength: action.payload.minLength !== undefined ? action.payload.minLength : undefined,
        maxLength: action.payload.maxLength !== undefined ? action.payload.maxLength : undefined,
        pattern: action.payload.pattern !== undefined ? action.payload.pattern : undefined,
        options: action.payload.options || [], // Ensure options array is initialized for new questions
      });
    },
    removeQuestion: (state, action) => {
      const questionIdToRemove = action.payload; // payload is the question ID
      state.questions = state.questions.filter(q => q.id !== questionIdToRemove);
    },
    updateQuestion: (state, action) => {
      const updatedQuestion = action.payload;
      const index = state.questions.findIndex(q => q.id === updatedQuestion.id);
      if (index !== -1) {
        state.questions[index] = updatedQuestion;
      }
    },
    addOption: (state, action) => {
      const { questionId, newOption } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question && (question.type === 'multiple-choice' || question.type === 'checkboxes' || question.type === 'dropdown' || question.type === 'radio')) {
        question.options.push(newOption);
      }
    },
    removeOption: (state, action) => {
      const { questionId, optionIdToRemove } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question && question.options) {
        question.options = question.options.filter(opt => opt.id !== optionIdToRemove);
        // Ensure at least one option exists if all are removed for choice-based types
        if (question.options.length === 0 && (question.type === 'multiple-choice' || question.type === 'checkboxes' || question.type === 'dropdown' || question.type === 'radio')) {
          question.options.push({ id: `opt-${Date.now()}-1`, text: 'Option 1' });
        }
      }
    },
    updateOption: (state, action) => {
      const { questionId, updatedOption } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question && question.options) {
        const optionIndex = question.options.findIndex(opt => opt.id === updatedOption.id);
        if (optionIndex !== -1) {
          question.options[optionIndex] = updatedOption;
        }
      }
    },
    reorderQuestions: (state, action) => {
      const { draggedIndex, droppedOverIndex } = action.payload;
      const [draggedItem] = state.questions.splice(draggedIndex, 1);
      state.questions.splice(droppedOverIndex, 0, draggedItem);
    },
  },
});

export const {
  setInitialForm,
  updateFormDetails,
  addQuestion,
  removeQuestion,
  updateQuestion,
  addOption,
  removeOption: removeOptionAction,
  updateOption,
  reorderQuestions,
} = formSlice.actions;

export default formSlice.reducer;
