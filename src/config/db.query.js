const DbQuery = () => {
    const SELECT_BIODATA_LIST = `SELECT * FROM biodata ORDER BY id DESC`;
    const INSERT_BIODATA = `INSERT INTO biodata (first_name, last_name, dob, pob, address, marital_status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const UPDATE_BIODATA = `UPDATE biodata SET first_name = $1, last_name = $2, dob = $3, pob = $4, address = $5, marital_status = $6 WHERE id = $7 RETURNING *`;
    const DELETE_BIODATA = `DELETE FROM biodata WHERE id = $1`;
    const SEARCH_BIODATA = `SELECT * FROM biodata WHERE first_name ILIKE $1
    OR last_name ILIKE $1 OR dob ILIKE $1 OR pob ILIKE $1 OR address ILIKE $1`;
    const SELECT_BIODATA_ID = `SELECT * FROM biodata WHERE id = $1`;

    return {
        SELECT_BIODATA_LIST, INSERT_BIODATA, UPDATE_BIODATA, DELETE_BIODATA, SEARCH_BIODATA, SELECT_BIODATA_ID
    }
  };

  module.exports = DbQuery;