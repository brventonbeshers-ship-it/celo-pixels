// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CeloPixels {
    uint256 public constant GRID_SIZE = 50;

    // (x, y) => color (uint24 RGB)
    mapping(uint256 => mapping(uint256 => uint24)) public grid;
    // user => pixels placed count
    mapping(address => uint256) public userPixelCount;
    // total pixels placed
    uint256 public totalPixels;

    event PixelPlaced(address indexed user, uint256 x, uint256 y, uint24 color);

    function placePixel(uint256 x, uint256 y, uint24 color) external {
        require(x < GRID_SIZE && y < GRID_SIZE, "Out of bounds");

        grid[x][y] = color;
        userPixelCount[msg.sender] += 1;
        totalPixels += 1;

        emit PixelPlaced(msg.sender, x, y, color);
    }

    function getPixel(uint256 x, uint256 y) external view returns (uint24) {
        return grid[x][y];
    }

    function getUserPixelCount(address user) external view returns (uint256) {
        return userPixelCount[user];
    }
}
