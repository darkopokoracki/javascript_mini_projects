var rezultujuci_string = `
    <table border="1" style="border-collapse: collapse;">
        <tr>
            <th>*</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
        </tr>
`;

for (var i = 1; i <= 9; i++) {
    rezultujuci_string += `
        <tr>
            <th>${i}</th>
    `;

    for (var j = 1; j <= 9; j++) {
        rezultujuci_string += `
            <td>${i * j}</td>
        `;
    }

    rezultujuci_string += `</tr>`;
}


rezultujuci_string += `</table>`;
document.write(rezultujuci_string);