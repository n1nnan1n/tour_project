const logout = (req, res) => {
    // ทำลาย session ของผู้ใช้
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // ทำสิ่งที่ต้องการหลังจาก logout แล้ว
        res.redirect('/'); // หรือไปยังหน้าที่คุณต้องการ
      }
    });
  };
  
module.exports = { logout };