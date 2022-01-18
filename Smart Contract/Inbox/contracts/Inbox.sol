// SPDX-License-Identifier: MIT
pragma solidity ^0.4.26;

contract Inbox{
    string public message;

    function Inboxs(string memory initialMessage) public{
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public{
        message = newMessage;
    }

    function getMessage() public view returns (string memory){
        return message;
    }
}