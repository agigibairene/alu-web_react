import { normalizeNotifications } from './notifications';

const notificationsData = [
  {
    id: "5debd7642e815cd350407777",
    author: {
      id: "5debd764a7c57c7839d722e9",
      age: 25,
      email: "poole.sanders@holberton.nz",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"
    },
    context: {
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
    },
  },
  {
    id: "5debd76480edafc8af244228",
    author: {
      id: "5debd764f8452ef92346c772", 
      age: 30,
      email: "john.doe@holberton.nz",
      name: { first: "John", last: "Doe" },
      picture: "http://placehold.it/32x32"
    },
    context: {
      guid: "c13b53e8-b39e-4d2c-bd47-08f847be5e80",
      isRead: true,
      type: "success",
      value: "Notification text here."
    },
  },
];


describe('Notification Schema Normalization', () => {
  let normalizedData;

  beforeAll(() => {
    normalizedData = normalizeNotifications(notificationsData);
  });

  it('should have a correct result array', () => {
    expect(normalizedData.result).toEqual([
      "5debd7642e815cd350407777",
      "5debd76480edafc8af244228",
    ]);
  });

  it('should have a correct users entity', () => {
    const user = normalizedData.entities.users["5debd764a7c57c7839d722e9"]; // Ensure this ID matches one in notificationsData
    expect(user).toEqual({
      id: "5debd764a7c57c7839d722e9",
      age: 25,
      email: "poole.sanders@holberton.nz",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"
    });
  });
  

  it('should have a correct messages entity', () => {
    const message = normalizedData.entities.messages["efb6c485-00f7-4fdf-97cc-5e12d14d6c41"];
    expect(message).toEqual({
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
    });
  });

  it('should have a correct notifications entity', () => {
    const notification = normalizedData.entities.notifications["5debd7642e815cd350407777"];
    expect(notification).toEqual({
      author: "5debd764a7c57c7839d722e9",
      context: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      id: "5debd7642e815cd350407777"
    });
  });
  
});
