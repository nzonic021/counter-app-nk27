const selectCounterValue = (state) => state.counter.value;

const selectIsCounterValueEvenNumber = (state) => state.counter.value % 2 === 0;

export { selectCounterValue, selectIsCounterValueEvenNumber };
