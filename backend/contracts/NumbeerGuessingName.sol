// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract NumberGuessingGame {
    /// @notice Address of the deployer
    address payable public owner;
    /// @notice Number choosen to be discover
    uint256 public misteryNumber;
    /// @notice Amount of eth set as the prize to discover the misternumber
    uint256 public prizePool;
    /// @notice Total amount colledted of of eth that was paid to guess by the participants
    uint256 public betPool;
    /// @notice Flag indicating  wheter the misteryNumber was discover or not
    bool public wasGuessed;
    /// @notice Amount to pay to the owner to try and guess the misteryNumber
    uint256 public constant FEE = 0.01 ether;
    /// @notice Amount set by owner as the prize to the participant that guess the misteryNumber
    uint256 public constant PRIZE_AMOUNT = 0.1 ether;

    struct Guess {
        address participant;
        uint256 guessedNumber;
    }

    Guess[] public allGuesses;

    event NumberGuessed(address indexed participant, uint256 guessedNumber);

    constructor() {
        owner = payable(msg.sender);
        /// @dev Placeholder value until the owner sets it
        misteryNumber = 0;
        betPool = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Sorry, but you are not the owner");
        _;
    }
    modifier setPrizeAmount() {
        require(msg.value == PRIZE_AMOUNT, "Must pay 0.1 ether to continue..");
        _;
    }
    modifier numberNotZero() {
        require(misteryNumber != 0, "Target number has not been set yet");
        _;
    }
    modifier betPoolIs1Ether() {
        require(
            betPool >= 0.1 ether,
            "Bet pool has not reached the minimum threshold"
        );
        _;
    }

    /// @notice Function that set a misteryNumber and 1 eth as bounty
    /// @dev Only the owner can call this function and the range to choose the number es 1 to 1000
    function setMisteryNumber(
        uint256 _misteryNumber
    ) external payable onlyOwner setPrizeAmount {
        require(misteryNumber == 0, "Target number has already been set");
        require(
            _misteryNumber >= 1 && _misteryNumber <= 1000,
            "Number must be between 1 and 1000"
        );

        prizePool = PRIZE_AMOUNT;
        misteryNumber = _misteryNumber;
        wasGuessed = false;
    }

    /// @notice Charges the FEE price and player trys to guess the number, if guessed it pays the prizePool to the msg.sender,
    /// @notice and pays the owner the collected betPool
    function guessNumber(uint256 number) external payable numberNotZero {
        require(msg.value == FEE, "Fees are 0.01 ether!");
        require(
            number >= 1 && number <= 1000,
            "Number must be between 1 and 1000"
        );

        betPool += FEE;

        allGuesses.push(Guess(msg.sender, number));

        emit NumberGuessed(msg.sender, number);

        if (number == misteryNumber) {
            address payable winner = payable(msg.sender);
            winner.transfer(prizePool);
            owner.transfer(betPool);
            prizePool = 0;
            betPool = 0;
            misteryNumber = 0;
            wasGuessed = true;
            delete allGuesses;
        }
    }

    /// @notice Only owner can withdraw from betPool which must be at leat 1 ETH
    function withdrawBetPool() external onlyOwner betPoolIs1Ether {
        owner.transfer(betPool);
        betPool = 0;
    }

    /// @notice Reset the game and establish a new misterNumber
    function resetGame(
        uint256 _misteryNumber
    ) external payable onlyOwner setPrizeAmount {
        require(
            _misteryNumber >= 1 && _misteryNumber <= 1000,
            "Number must be between 1 and 1000"
        );
        misteryNumber = _misteryNumber;
        prizePool = PRIZE_AMOUNT;
        betPool = 0;
        delete allGuesses;
        wasGuessed = false;
    }
}
