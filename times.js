/*function getPop(){
    document.write(5 + 6);
    document.write(livepopulartimes.get_populartimes_by_address("(Sonny Werblin Recreation Center) 656 Bartholomew Rd, Piscataway, NJ, United States")[current_popularity]);
}*/

const spawner = require('child_process').spawn;

const data_to_pass_in = 'Send this to python script';
console.log('Data sent to python script:');

const python_process = spawner('python', ['./times.py', data_to_pass_in]);

python_process.stdout.on('data', (data) => {
    console.log('Data recieved from python script:', data.toString());
});