// Untuk mapping ke table
module.exports = Employee = (
    id,
    firstName,
    lastName,
    dob,
    pob,
    address,
    maritalStatus
) => {
    return {id, firstName, lastName, dob, pob, address, maritalStatus}
}