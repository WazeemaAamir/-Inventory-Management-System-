const products = [
     { name: 'Product 1', quantity: 10, price: 100 },
     { name: 'Product 2', quantity: 20, price: 200 },
     { name: 'Product 3', quantity: 30, price: 300 }
   ];
   
   // Function to add products to the table
   function displayProducts() {// Clear existing table content
     
     products.forEach(product => {
       const row = document.createElement('tr');
       
       const nameCell = document.createElement('td');
       nameCell.textContent = product.name;
       row.appendChild(nameCell);
       
       const quantityCell = document.createElement('td');
       quantityCell.textContent = product.quantity.toString();
       row.appendChild(quantityCell);
       
       const priceCell = document.createElement('td');
       priceCell.textContent = product.price.toString();
       row.appendChild(priceCell);
     });
   }
   
   // Call the function to display products
   displayProducts();
   