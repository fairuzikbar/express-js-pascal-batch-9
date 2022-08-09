// Untuk mapping ke table
module.exports = Employee = (
    id,
    firstName,
    lastName,
    dob,
    pob,
    address
) => {
    return {id, firstName, lastName, dob, pob, address}
}