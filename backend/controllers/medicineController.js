const Medicine = require('../models/medicine');

// Get all medicines
exports.getAllMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.findAll();
        res.json(medicines);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching medicines', error });
    }
};

// Get medicine by ID
exports.getMedicineById = async (req, res) => {
    const { id } = req.params;

    try {
        const medicine = await Medicine.findByPk(id);
        if (!medicine) return res.status(404).json({ message: 'Medicine not found' });

        res.json(medicine);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching medicine', error });
    }
};
