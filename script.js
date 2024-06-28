fetch('URL_DEL_ARCHIVO_PUBLICO_DE_GOOGLE_SHEETS')
  .then(response => response.text())
  .then(data => {
    console.log(data);
    const rows = data.split('\n');
    
    // Omitir la primera fila que contiene los encabezados
    rows.shift();
    
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