// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract YourNFT is ERC721, Ownable {
    using SafeMath for uint256;

    string private baseURI;
    mapping(uint256 => string) private tokenURIs;

    constructor() ERC721("YourNFT", "YNFT") {
        baseURI = "https://ipfs.io/ipfs/";
    }

    function mint(address to, uint256 tokenId, string memory tokenURI) external onlyOwner {
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }

    function _setTokenURI(uint256 tokenId, string memory tokenURI) internal {
        tokenURIs[tokenId] = tokenURI;
    }

    function getTokenURI(uint256 tokenId) external view returns (string memory) {
        return string(abi.encodePacked(baseURI, tokenURIs[tokenId]));
    }

}
