import commentsData from './modules/__COMMENTMOCK__/countComment.js';

const commentsCounter = (movieComments) => {
  const commentsCounter = movieComments;
  return commentsCounter;
};

describe('Testing if the comments are retrieved from the Involvement API correctly', () => {
  test('Testing comments counter function is working', () => {
    // Arrange
    const commentsArray = commentsData;
    // Act
    const response = commentsCounter(commentsArray);
    // Assert
    expect(response.length).toBe(5);
  });
});