import {twoSum} from "./index";

describe('matching cities to foods', () => {
    test('adds 1 + 2 to equal 3', () => {
        // Arrange
        let x: number[] = [1, 2], y: number = 2;
        let expected: number = 2;

        // Act
        let actual: number = twoSum(x, y);

        // Assert
        expect(actual).toBe(expected);
    });
});
