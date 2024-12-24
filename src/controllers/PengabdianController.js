const dbConnection = require('../config/Database');
  
exports.getPengabdian = async (req, res) => {
   
    const query = 'SELECT * FROM pengabdian '; 
    dbConnection.query(query, (err, results) => { 
      if (err) {
        console.error('Kesalahan query database:', err);
        return res.status(500).json({ message: 'Terjadi kesalahan server' });
      }
      res.json({pengabdian:results});
    });
        
};

exports.insertPengabdian = (req, res) => {
  const { id,kd_pengabdian,judul,lokasi,thn_akademik,tanggal,status } = req.body; // Ambil data dari body permintaan
  dbConnection.query('INSERT INTO pengabdian (id,kd_pengabdian,judul,lokasi,thn_akademik,tanggal,status) VALUES (?, ?, ?, ?,?,?, ?)', [id,kd_pengabdian,judul,lokasi,thn_akademik,tanggal,status], (err, results) => {
      if (err) {
          res.status(500).json({ error: err.message });
      } else {
          res.status(201).json({ id: results.insertId,  kd_pengabdian,judul,lokasi,thn_akademik,tanggal,status });
      }
  });
};

exports.updatepengabdian = (req, res) => {
  const { id } = req.params;
  const {kd_pengabdian, judul,lokasi,thn_akademik,tanggal,status } = req.body; // Ambil data dari body permintaan
  dbConnection.query('UPDATE pengabdian SET kd_pengabdian =?,judul = ?, lokasi = ?, thn_akademik = ?, tanggal = ?, status = ? WHERE id = ?', [kd_pengabdian,judul,lokasi,thn_akademik,tanggal,status, id], (err, results) => {
      if (err) {
          res.status(500).json({ error: err.message });
      } else {
          res.status(200).json({ message: 'Data updated successfully' });
      }
  });
};

exports.deletepengabdian = (req, res) => {
  const { id } = req.params; // Ambil ID dari parameter
  dbConnection.query('DELETE FROM pengabdian WHERE id = ?', [id], (err, results) => {
      if (err) {
          res.status(500).json({ error: err.message });
      } else {
          res.status(200).json({ message: 'Data deleted successfully' });
      }
  });
};






