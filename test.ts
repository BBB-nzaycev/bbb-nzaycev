function subscribeToStore(store: any) {
    const handlers = [changeHash]
    const enabledModules = ['browse-git']
    subscribeHashHandlers(handlers, enabledModules, store, getRouting)
  }