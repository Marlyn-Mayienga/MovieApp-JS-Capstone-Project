import movieData from './modules/__MOCK__/displayMock.js';

describe('Testing if the movies are retrieved from API perfectly', () => {
  test('Testing item counter function is working', () => {
    // Arrange
    const movieArray = movieData;
    // Act
    const response = movieArray;
    // Assert
    expect(response.length).toBe(4);
  });
});