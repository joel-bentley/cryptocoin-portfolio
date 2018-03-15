const loggingMiddleware = store => next => action => {
  console.log('Redux Log:', action);
  // console.log('Store:', store.getState());
  next(action);
};

export default loggingMiddleware;
