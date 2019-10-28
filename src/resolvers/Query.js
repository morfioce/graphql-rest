const Query = {
  healthz() {
    return 'Ok';
  },

  user(parent, args, { userLoader }) {
    return userLoader.getResourceById('users', args.id);
  },

  flights(_, args, { flightLoader }) {
    const { source, destination } = args;
    let queryString = 'q?'
    if (source) {
      queryString += 's=' + source
    }
    if (destination) {
      queryString += '&d=' + destination
    }
    return flightLoader.getResourcesByParams('flights', queryString);
  }
};

export default Query;
