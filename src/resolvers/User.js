const User = {
  async flights(parent, _, { flightLoader, bookingLoader }) {
    let bookings = await bookingLoader.getResourceById(
      'bookings/user',
      parent.id
    );
    return Promise.all(
      bookings.map((b) => flightLoader.getResourceById('flights', b.flightId))
    );
  }
};

export default User;
