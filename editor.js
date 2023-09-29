(function () {

    Flems(document.getElementById('flems-editor'), {
        files: [
            {
                name: '.html',
                content: "<div id=\"board\">\n  <button class=\"cell\" id=\"cell-1\" />\n  <button class=\"cell\" id=\"cell-2\" />\n  <button class=\"cell\" id=\"cell-3\" />\n  \n  <button class=\"cell\" id=\"cell-4\" />\n  <button class=\"cell\" id=\"cell-5\" />\n  <button class=\"cell\" id=\"cell-6\" />\n  \n  <button class=\"cell\" id=\"cell-7\" />\n  <button class=\"cell\" id=\"cell-8\" />\n  <button class=\"cell\" id=\"cell-9\" />\n</div>\n\n<button id=\"reset-button\">Reset</button>\n\n<div id=\"messages\"></div>"
            },
            {
                name: 'ui.js',
                content: "const ui = {\n  /**\n   * Mark a cell as played by player X or O.\n   */\n  markCell: function(number, player){\n    const n = Number(number);\n    if(n < 1 && n > 9) {\n      throw new Error('Invalid cell number !');\n    }\n    if(player !== 'X' && player !== 'O'){\n      throw new Error('Only X and O players allowed');\n    }\n\n    document.getElementById(\"cell-\" + number).innerText = player;\n  },\n  \n  /**\n   * Clear the board and messages.\n   */\n  reset: function(){\n    ui._cells.forEach(cell => cell.innerText = '')\n    ui._messages.innerHTML = '';    \n  },\n  \n  /**\n   * Returns the player that marked the given cell,\n   * or null if the cell is free\n   */\n  getValueForCell: function(number) {\n    const player = document.getElementById(\"cell-\" + number).innerText;\n    return player ? player : null; // Empty string is falsy\n  },\n  \n  /**\n   * Returns true if a cell is free (not played),\n   * false otherwise.\n   */\n  isFreeCell: function(number) {\n    return !ui.getValueForCell(number);\n  },\n  \n  /**\n   * Event handler : When a cell is clicked by a player, the\n   * callbabckFunction will be called with the cell number as argument.\n   */\n  onClickCell: function (callbackFunction) {\n    ui._cells.forEach(cell => {\n      cell.addEventListener('click', event => {\n        const cellNumber = Number(event.target.id.split('cell-')[1]);\n        callbackFunction(cellNumber);\n      });\n    });\n  },\n  \n  /**\n   * Prints a message under the game board.\n   */\n  message: function(text) {\n    const msg = document.createElement('p')\n    msg.innerText = text;\n    msg.className = 'message';\n    \n    const parent =  ui._messages || document.body;\n    parent.appendChild(msg);\n  },\n  \n  // Internals\n  _cells: document.querySelectorAll('.cell'),\n  _messages: document.getElementById('messages'),\n  _resetButton: document.getElementById('reset-button')\n};\n\nui._resetButton.addEventListener('click', ui.reset);\n"
            },
            {
                name: 'game.js',
                content: "/*\n* Given this game board, Let's implement a Tic-Tac-Toe !\n* \n* +---+---+---+\n* | 1 | 2 | 3 |\n* +---+---+---+\n* | 4 | 5 | 6 |\n* +---+---+---+\n* | 7 | 8 | 9 |\n* +---+---+---+\n* \n* NOTE : For simplicity, `ui.js` exposes some helper functions to\n*        interract with the board and display messages.\n*/\n\n// EXAMPLE: mark a cell\nui.markCell(1, 'X');\nui.markCell(5, 'O');\n\n// EXAMPLE: Get the value of a cell\nif(ui.isFreeCell(6)) {\n  ui.message(\"Hi ! Cell #6 is free !\");\n}\nui.message(\"Player \" + ui.getValueForCell(1) + \" has played on Cell #1 !\");\n\n// EXAMPLE: Handle the click on a cell\nui.onClickCell(function(cellNumber) {\n  ui.message(\"You clicked cell #\" + cellNumber);\n});\n"
            },
            {
                name: '.css',
                content: "body {\n  color: navy;\n  font-size: 1.2rem;\n  text-align: center;\n  \n  /* Yes, 'Comic Sans' rocks ! */\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n}\n\n#board {\n  margin: 3rem auto 1rem;\n  display: grid;\n  width: 9rem;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  border: 2px solid;\n}\n#board .cell {\n  color: navy;\n  height: 3rem;\n  padding: 0;\n  border: 2px solid;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n#messages::before {\n  margin-top: 0.5rem;\n  font-size: 0.8em;\n  content: 'messages:';\n  border-bottom: 3px solid;\n  display: inline-block;\n}"
            }
        ],
        links: [
        ],
        selected: 'game.js',
        linkTabs: false,
        middle: 70
    });
})();

