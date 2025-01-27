const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies.jwt || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Neautorizuotas: nerastas simbolis' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Draudžiama: neteisingas simbolis' });
    }
};
