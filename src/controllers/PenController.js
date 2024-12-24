const dbConnection = require('../config/Database');
  
exports.getPenelitian = async (req, res) => {
   
    const query = 'SELECT * FROM penelitian '; 
    dbConnection.query(query, (err, results) => { 
      if (err) {
        console.error('Kesalahan query database:', err);
        return res.status(500).json({ message: 'Terjadi kesalahan server' });
      }
      res.json({penelitian:results});
    });
        
};

exports.insertPenelitian = (req, res) => {
  const { id,kd_penelitian,judul,lokasi,thn_akademik,tanggal,status } = req.body; // Ambil data dari body permintaan
  dbConnection.query('INSERT INTO penelitian (id,kd_penelitian,judul,lokasi,thn_akademik,tanggal,status) VALUES (?, ?, ?, ?,?,?, ?)', [id,kd_penelitian,judul,lokasi,thn_akademik,tanggal,status], (err, results) => {
      if (err) {
          res.status(500).json({ error: err.message });
      } else {
          res.status(201).json({ id: results.insertId,  kd_penelitian,judul,lokasi,thn_akademik,tanggal,status });
      }
  });
};

exports.updatePenelitian = (req, res) => {
  const { id } = req.params;
  const {kd_penelitian, judul,lokasi,thn_akademik,tanggal,status } = req.body; // Ambil data dari body permintaan
  dbConnection.query('UPDATE penelitian SET kd_penelitian =?,judul = ?, lokasi = ?, thn_akademik = ?, tanggal = ?, status = ? WHERE id = ?', [kd_penelitian,judul,lokasi,thn_akademik,tanggal,status, id], (err, results) => {
      if (err) {
          res.status(500).json({ error: err.message });
      } else {
          res.status(200).json({ message: 'Data updated successfully' });
      }
  });
};

exports.deletePenelitian = (req, res) => {
  const { id } = req.params; // Ambil ID dari parameter
  dbConnection.query('DELETE FROM penelitian WHERE id = ?', [id], (err, results) => {
      if (err) {
          res.status(500).json({ error: err.message });
      } else {
          res.status(200).json({ message: 'Data deleted successfully' });
      }
  });
};






