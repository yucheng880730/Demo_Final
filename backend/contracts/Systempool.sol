pragma solidity ^0.8.0;

contract Systempool {
    // Struct to store details of each deposit
    struct Deposit {
        uint receiptNumber;
        uint amount;
        address payable depositor;
    }

    // Mapping from receipt number to deposit details
    mapping(uint => Deposit) public deposits;

    // Total deposit amount in contract
    uint public totalDepositAmount;

    // Function to make a deposit
    function deposit(uint _amount) public payable {
        // Generate a receipt number
        uint receiptNumber = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, _amount)));

        // Update the mapping with the details of the deposit
        deposits[receiptNumber] = Deposit(receiptNumber, _amount, payable(address(msg.sender)));

        // Update the total deposit amount
        totalDepositAmount += _amount;

        // Transfer the Ether to the contract
        payable(msg.sender).transfer(_amount);
    }

    // Function to retrieve deposited Ether
    function retrieve(uint _receiptNumber) public {
        // Retrieve the details of the deposit
        Deposit storage deposit = deposits[_receiptNumber];

        // Check that the receipt number is valid and belongs to the caller
        require(deposit.receiptNumber == _receiptNumber, "Invalid receipt number");
        require(deposit.depositor == msg.sender, "Receipt does not belong to caller");

        // Transfer the Ether back to the user
        deposit.depositor.transfer(deposit.amount);

        // Update the total deposit amount
        totalDepositAmount -= deposit.amount;

        // Delete the deposit from the mapping
        delete deposits[_receiptNumber];
    }

    // Function to get the total deposit amount in the contract
    function getTotalDepositAmount() public view returns (uint) {
        return totalDepositAmount;
    }
}
