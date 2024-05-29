module.exports = {
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
};
