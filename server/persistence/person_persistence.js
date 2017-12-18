'use strict';

const pool = require('../DBconnection.js');

// function createEmployee(employee, callback) {
//     if (typeof callback == "function") {
//         pool.query(
//             "INSERT INTO angajati (nume, prenume, cnp, functia, aviz_psiho, analize_medicale, firma, telefon) " +
//             "VALUES ('" + employee.nume + "','" + employee.prenume + "','" + employee.cnp + "','" + employee.functia + "','" + employee.aviz_psiho +
//             "','" + employee.analize_medicale + "','" + employee.firma + "','" + employee.telefon + "');"
//         );
//         callback();

//     }
// }

// function updateEmployee(employee, callback) {
//     if (typeof callback == "function") {
//         pool.query(
//             "UPDATE angajati SET nume='" + employee.nume +
//             "', prenume = '" + employee.prenume +
//             "', cnp='" + employee.cnp +
//             "', functia='" + employee.functia +
//             "', aviz_psiho='" + employee.aviz_psiho +
//             "', analize_medicale='" + employee.analize_medicale +
//             "', firma='" + employee.firma +
//             "', telefon='" + employee.telefon +
//             "', created_file=" + employee.created_file +
//             ", created_skill_file=" + employee.created_skill_file +
//             " WHERE id_angajat = " + employee.id_angajat + ";");

//         callback();

//     }
// }

function getPerson(id,callback) {
	return pool.query("SELECT * FROM person WHERE id_angajat=" + id + ";");
}

// function deleteEmployee(employee, callback) {
//     if (typeof callback == "function") {
//         pool.query(
//             "DELETE FROM angajati WHERE id_angajat = " + employee.id_angajat + ";");
//         callback();

//     }
// }

function getAllPersons(callback) {
	return pool.query('SELECT * FROM person;');
}

module.exports = {
   // createEmployee: createEmployee,
  //  updateEmployee: updateEmployee,
    getPerson: getPerson,
  //  deleteEmployee: deleteEmployee,
  getAllPersons: getAllPersons
};
