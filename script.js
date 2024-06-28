fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTdSHbV58pvz1mflTyHvgwgCB4gEQ38PHsqw30q0tLocoES5RcypT9OVLkjQdlQsUx0r_NpcRxvtB5s/pub?output=csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n');
    
    // Obtener los encabezados de las columnas
    const headers = rows[0].split(',');
    
    // Omitir la primera fila que contiene los encabezados
    rows.shift();
    
    // Obtener el elemento de la tabla
    const table = document.getElementById('player-table');
    
    // Crear la fila de encabezados
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
      const headerCell = document.createElement('th');
      headerCell.textContent = header;
      headerRow.appendChild(headerCell);
    });
    
    // Agregar la fila de encabezados a la tabla
    table.querySelector('thead').appendChild(headerRow);
    
    // Mostrar los datos en la tabla
    rows.forEach(row => {
      const playerData = row.split(',');
      const playerRow = document.createElement('tr');
      
      playerData.forEach(cellData => {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        playerRow.appendChild(cell);
      });
      
      table.querySelector('tbody').appendChild(playerRow);
    });
  })
  .catch(error => console.error('Error fetching data:', error));