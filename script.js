fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTlAJXDac7kQ4rgQM57RjLmbKw1KaAzL0XMIEFWanLVn7rQSGqXQy5bFxLTnxYB3Q/pub?output=csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n');
    
    rows.forEach(row => {
      const playerData = row.split(',');
      const playerRow = document.createElement('tr');
      
      playerData.forEach(cellData => {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        playerRow.appendChild(cell);
      });
      
      document.getElementById('player-data').appendChild(playerRow);
    });
  })
  .catch(error => console.error('Error fetching data:', error));